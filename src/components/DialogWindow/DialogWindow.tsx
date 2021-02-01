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
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

import { connect } from 'react-redux';
import { AppState, GameState, Lang } from '../../store/types';

import imgMother from '../../assets/images/personage/personage0.png';
import { personage } from '../data/personage';
import { startNewLevel } from '../../store/actions/startNewGameAction';

import { answers as answersAll } from '../data/answersHero';


import { useStyles } from './DialogWindow.style';

// const answers = ['ok', 'no'];
// const answers = [];


// const useStyles = makeStyles({
//   avatar: {
//     backgroundColor: blue[100],
//     color: blue[600],
//   },
// });

export interface SimpleDialogProps {
  open: boolean;
  // selectedValue: string;
  selectedNum: number;
  lang: Lang;
  personageNum: number;
  onClose: ( index: number) => void;
}


function SimpleDialog(props: SimpleDialogProps) {
  const classes = useStyles();
  const { onClose, lang, personageNum, open, selectedNum } = props;

  const answersArr = answersAll[personageNum][lang].answer;

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
    >
      <DialogTitle id="simple-dialog-title">
        {/* {personage[personageNum][lang].text} */}
        {personage[personageNum][lang].text.replaceAll('{namePlayer}', 'FUck you')}
      </DialogTitle>
      <List>
        {answersArr.map((email, index) => (
          <ListItem
            button
            onClick={() => handleListItemClick(email, index)}
            key={email}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
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
  onClose: ( index: number) => void;
}

function DialogWithResult(props: DialogWithResultProps) {
  const classes = useStyles();
  const { onClose, lang, personageNum, open, selectedNum } = props;

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
    >
      <DialogTitle id="simple-dialog-title">
        {/* {personage[personageNum][lang].text} */}
        {interpretationArr[selectedNum]}
      </DialogTitle>
      {/* <List>
        {answersArr.map((email, index) => (
          <ListItem
            button
            onClick={() => handleListItemClick(email, index)}
            key={email}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}
      </List> */}
    </Dialog>
  );
}

export interface SimpleDialogDemoProps {
  lang: 'en' | 'de' | 'ru';
  personageNum: number;
  // onClose: ( index: number) => void;

  imgSrc: string;
  addScoreToLevelScore: ( score: number) => void;
}

const SimpleDialogDemo = (props: SimpleDialogDemoProps) => {
  const classes = useStyles();
  const { lang, imgSrc, personageNum, addScoreToLevelScore } = props;
  const [open, setOpen] = useState(false);

  const [openAnswers, setOpenAnswers] = useState(false);

  // const [selectedValue, setSelectedValue] = React.useState(answersArr[1]);
  // const [selectedValue, setSelectedValue] = useState<string>('');


  const [disableButton, setDisableButton] = useState(false);
  const [selectedNum, setSelectedNum] = useState<number>(-1);

  const handleClickOpen = () => {
    // setOpen(true);
    setOpenAnswers(true);
    setDisableButton(true);
  };

  const handleCloseAnswers = ( index: number) => {
    // setOpen(false);
    setOpenAnswers(false);

    // setSelectedValue(value);
    setSelectedNum(index);
    setOpen(true);

    // props.startNewLevel();
  };

  const handleClose = ( index: number) => {
    addScoreToLevelScore(answersAll[personageNum].score[selectedNum]);
    setOpen(false);
    // props.startNewLevel();
  };

  return (
    <div>
      {/* <Typography variant="subtitle1">Selected: {selectedNum}</Typography>
      <br /> */}
      <Button disabled={disableButton} color="primary" onClick={handleClickOpen}>
        <img src={imgSrc} alt="mother" className={classes.imgUser} />
        {/* Open simple dialog */}
      </Button>
      <SimpleDialog
        // selectedValue={selectedValue}
        selectedNum={selectedNum}
        open={openAnswers}
        lang={lang}
        onClose={handleCloseAnswers}
        personageNum={personageNum}
      />
      <DialogWithResult
        // selectedValue={selectedValue}
        selectedNum={selectedNum}
        open={open}
        lang={lang}
        onClose={handleClose}
        personageNum={personageNum}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleDialogDemo);
