import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Box } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

import { connect } from 'react-redux';
import { AppState, GameState, Lang } from '../../store/types';

import imgMother from '../../assets/images/personage/personage0.png';
import girl from '../../assets/images/girl.png';
import boy from '../../assets/images/boy.png';
import gin from '../../assets/images/gin_success.png';
import { personage } from '../data/personage';

import {
  startNewLevel,
  addToScoreGame,
} from '../../store/actions/startNewGameAction';

import { answers as answersAll } from '../data/answersHero';

import { buttons, hero as genderName } from '../data/variables';

import { useStyles } from './DialogWindow.style';


export interface DialogWithQuestionProps {
  open: boolean;
  // selectedValue: string;
  selectedNum: number;
  lang: Lang;
  personageNum: number;
  userName: string;
  gender: string;

  onClose: (index: number) => void;
}

function DialogWithQuestion(props: DialogWithQuestionProps) {
  const classes = useStyles();
  const {
    onClose,
    lang,
    personageNum,
    open,
    selectedNum,
    userName,
    gender,
  } = props;

  const answersArr = answersAll[personageNum][lang].answer;

  let greeting: string | undefined;
  let avaSrc: string | undefined;
  if (gender === 'girl') {
    avaSrc = girl;
    greeting = personage[personageNum][lang]?.text
      .replaceAll('{namePlayer}', userName)
      .replaceAll('{hero}', genderName[1][lang]);
  } else {
    avaSrc = boy;
    greeting = personage[personageNum][lang]?.text
      .replaceAll('{namePlayer}', userName)
      .replaceAll('{hero}', genderName[0][lang]);
  }

  const handleClose = () => {
    onClose(selectedNum);
  };

  const handleListItemClick = (value: string, index: number) => {
    onClose(index);
  };

  return (
    <Dialog
      // onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth="md"
    >
      <DialogTitle id="simple-dialog-title" className={classes.titleDialog}>{greeting}</DialogTitle>
      <List>
        {answersArr.map((email, index) => (
          <ListItem
            button
            onClick={() => handleListItemClick(email, index)}
            key={email}
          >
            <ListItemAvatar>
              <Avatar alt='avatar' src={avaSrc} style={{ border: '1px solid red' }} />
            </ListItemAvatar>
            <ListItemText primary={`${index + 1  } _ ${  email}`} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export interface DialogWithResultProps {
  open: boolean;
  // selectedValue: string;
  selectedNum: number;
  lang: 'en' | 'de' | 'ru';
  personageNum: number;
  userName: string;
  onClose: (index: number) => void;
}

function DialogWithResult(props: DialogWithResultProps) {
  const classes = useStyles();
  const { onClose, lang, personageNum, open, selectedNum, userName } = props;

  const interpretationArr = answersAll[personageNum][lang].interpretation;

  const handleClose = () => {
    onClose(selectedNum);
  };

  const handleListItemClick = (value: string, index: number) => {
    onClose(index);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth="md"
    >
      <Box className={classes.gin}>
        <img src={gin} alt={gin} width='100%' />
      </Box>
      <DialogTitle id="simple-dialog-title" className={classes.titleDialogInt}>
        {/* {answersAll[personageNum][lang].interpretation[selectedNum].replaceAll('{namePlayer}', userName)} */}
        {answersAll[personageNum][lang].interpretation[selectedNum]}
      </DialogTitle>
      <Button onClick={handleClose} color="secondary" autoFocus>
        {buttons[4][lang]}
      </Button>
    </Dialog>
  );
}

export interface SimpleDialogDemoProps {
  lang: 'en' | 'de' | 'ru';
  personageNum: number;
  // onClose: ( index: number) => void;

  imgSrc: string;
  userName: string;
  gender: string;
  addScoreToLevelScore: (score: number) => void;
  addToScoreGame: (score: number) => void;
}

const SimpleDialogDemo = (props: SimpleDialogDemoProps) => {
  const classes = useStyles();
  const {
    lang,
    imgSrc,
    personageNum,
    addScoreToLevelScore,
    userName,
    gender,
  } = props;
  const [open, setOpen] = useState(false);

  const [openAnswers, setOpenAnswers] = useState(false);

  const [disableButton, setDisableButton] = useState(false);
  const [selectedNum, setSelectedNum] = useState<number>(-1);

  const handleClickOpen = () => {
    // setOpen(true);
    setOpenAnswers(true);
    setDisableButton(true);
  };

  const handleCloseAnswers = (index: number) => {
    // setOpen(false);
    setOpenAnswers(false);

    setSelectedNum(index);
    setOpen(true);

    props.addToScoreGame(answersAll[personageNum].score[index]);
  };

  const handleClose = (index: number) => {
    addScoreToLevelScore(answersAll[personageNum].score[selectedNum]);

    setOpen(false);
    // props.startNewLevel();
  };

  return (
    <div>
      {/* <Typography variant="subtitle1">Selected: {selectedNum}</Typography>
      <br /> */}
      <Button
        disabled={disableButton}
        color="primary"
        onClick={handleClickOpen}
      >
        <Tooltip title="???" classes={classes} arrow>
          <img src={imgSrc} alt="mother" className={classes.imgUser} />
        </Tooltip>
        
        {/* Open simple dialog */}
      </Button>
      <DialogWithQuestion
        selectedNum={selectedNum}
        open={openAnswers}
        lang={lang}
        onClose={handleCloseAnswers}
        personageNum={personageNum}
        userName={userName}
        gender={gender}
      />
      <DialogWithResult
        selectedNum={selectedNum}
        open={open}
        lang={lang}
        onClose={handleClose}
        personageNum={personageNum}
        userName={userName}
      />
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  console.log(state);
  return {
    userName: state.game.userName,
    gender: state.game.gender,
    lang: state.game.lang,
    activeLevel: state.game.activeLevel,
  };
};

const mapDispatchToProps = {
  startNewLevel,
  addToScoreGame,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleDialogDemo);
