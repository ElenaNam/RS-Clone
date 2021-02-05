import React, { useState, SyntheticEvent } from 'react';
// import './StartNewGame.css';
import Radio from '@material-ui/core/Radio';
import { connect } from 'react-redux';
// import { IProps } from './StartNewGame.models';

// import { useStyles } from './StartNewGame.style';

import StartNextLevel from '../StartNextLevel/StartNextLevel';

import { hero, locations, buttons } from '../data/variables';

import { AppState, GameState, Lang } from '../../store/types';

import { startNewLevel } from '../../store/actions/startNewGameAction';
import { useStyles } from './FirstLevel.style';

import SimpleDialogDemo from '../DialogWindow/DialogWindowHome';

export interface FirstLevelProps {
  lang: Lang;

  gender: string;
  userName: string;
  startNewLevel: () => void;
}


const FirstLevel = (props: FirstLevelProps) => {
  const { userName, gender } = props;
  const classes = useStyles();

  const handleStartNewLevel = () => {
    props.startNewLevel();
  };

  return (
    <div className={classes.pageWrapper}>
      <div className={classes.page}>
        <SimpleDialogDemo />
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  userName: state.game.userName,
  gender: state.game.gender,
  lang: state.game.lang,
});

const mapDispatchToProps = {
  startNewLevel,
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstLevel);