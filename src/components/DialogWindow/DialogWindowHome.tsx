import React from 'react';
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
import { AppState, GameState, Gender } from '../../store/types';

import imgMother from '../../assets/images/personage/personage0.png';
import girlImgSrc from '../../assets/images/girl.png';
import boyImgSrc from '../../assets/images/boy.png';

import { personage } from '../data/personage';
import { startNewLevel } from '../../store/actions/startNewGameAction';
import { useStyles } from './DialogWindowHome.style';
// import { answers } from '../data/answersHero';

const answers = ['OK'];
// const useStyles = makeStyles({
//   avatar: {
//     backgroundColor: blue[100],
//     color: blue[600],
//   },
// });

export interface SimpleDialogProps {
  open: boolean;
  selectedNum: number;
  lang: 'en' | 'de' | 'ru';
  userName: string;
  // personageNum: number;
  onClose: (index: number) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const classes = useStyles();
  const { onClose, lang, selectedNum, open, userName } = props;

  const handleClose = () => {
    onClose(selectedNum);
  };

  const handleListItemClick = (value: string) => {
    onClose(selectedNum);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">
        {personage[0][lang]?.text.replaceAll('{namePlayer}', userName)}
      </DialogTitle>
      <List>
        {answers.map((email) => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
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

export interface SimpleDialogDemoProps {
  lang: 'en' | 'de' | 'ru';
  userName: string;
  gender: Gender;
  // personageNum: number;
  // onClose: (index: number) => void;

  // imgSrc: string;
  startNewLevel: () => void;
}

const SimpleDialogDemo = (props: SimpleDialogDemoProps) => {
  const classes = useStyles();
  const { lang, userName, gender } = props;
  const [open, setOpen] = React.useState(false);
  const [selectedNum, setSelectedNum] = React.useState<number>(-1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (index: number) => {
    setOpen(false);
    setSelectedNum(index);
    
    props.startNewLevel();
  };

  let imgPers = girlImgSrc;
  if (gender === 'boy') {
    imgPers = boyImgSrc;
  }

  return (
    <div className={classes.imgBlock}>
      <img src={imgPers} alt="mother" className={classes.imgUser} />
      <Button color="primary" onClick={handleClickOpen}>
        {/* variant="outlined"  */}
        <img src={imgMother} alt="mother" className={classes.imgUser} />
        {/* Open simple dialog */}
      </Button>
      <SimpleDialog
        userName={userName}
        selectedNum={selectedNum}
        open={open}
        lang={lang}
        onClose={handleClose}
        // personageNum={personageNum}
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
