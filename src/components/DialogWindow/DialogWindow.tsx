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
import { AppState, GameState } from '../../store/types';

import imgMother from '../../assets/images/personage/personage0.png';
import { personage } from '../data/personage';
import { startNewLevel } from '../../store/actions/startNewGameAction';

import { answers as answersAll } from '../data/answersHero';


// const answers = ['ok', 'no'];
// const answers = [];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  lang: string;
  personageNum: number;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const classes = useStyles();
  const { onClose, lang, personageNum, selectedValue, open } = props;

  const answersArr = answersAll[personageNum][lang].answer;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string, index: number) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">{personage[personageNum][lang].text}</DialogTitle>
      <List>
        {answersArr.map((email, index) => (
          <ListItem button onClick={() => handleListItemClick(email, index)} key={email}>
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

const SimpleDialogDemo = (props) => {
  const { lang, imgSrc, personageNum } = props;
  const [open, setOpen] = React.useState(false);
  // const [selectedValue, setSelectedValue] = React.useState(answersArr[1]);
  const [selectedValue, setSelectedValue] = React.useState();
  const [selectedNum, setSelectedNum] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string, index: number) => {
    setOpen(false);
    setSelectedValue(value);
    setSelectedNum(index);

    
    // props.startNewLevel();
  };

  return (
    <div>
      <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
      <br />
      <Button color="primary" onClick={handleClickOpen}>
        <img src={imgSrc} alt="mother" className="img-user" />
        {/* Open simple dialog */}
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} lang={lang} onClose={handleClose} personageNum={personageNum} />
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