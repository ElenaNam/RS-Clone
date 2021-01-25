import React, { useState, SyntheticEvent } from 'react';
// import './StartNewGame.css';
import Radio from '@material-ui/core/Radio';
import { connect } from 'react-redux';
// import { IProps } from './StartNewGame.models';

// import { useStyles } from './StartNewGame.style';

import StartNextLevel from '../StartNextLevel/StartNextLevel';

import { hero, locations, buttons } from '../data/variables';

import girlImgSrc from '../../assets/images/girl.png';

import { AppState } from '../../store/types';

import { startNewLevel } from '../../store/actions/startNewGameAction';
import { useStyles } from './FirstLevel.style';

import SimpleDialogDemo from '../DialogWindow/DialogWindowHome';


const FirstLevel = (props) => {
  const { userName, gender } = props;
  const classes = useStyles();

    
  const [count, setCount] = useState(0);

  // const [userName, setUserName] = useState('');

  // const [gender, setGender] = useState('male');

  const handleGender = (e) => {
    // e.target.value && setGender(e.target.value);

    // setGender(e.target.value);
  };

  const handleStartNewLevel = () => {
    props.startNewLevel();
    // <StartNextLevel />;
  };

  return (
    <div className={classes.pageWrapper}>
      <div className="page">
        dd
        <SimpleDialogDemo />

      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  userName: state.game.userName,
  gender: state.game.gender,
});

const mapDispatchToProps = {
  startNewLevel,
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstLevel);