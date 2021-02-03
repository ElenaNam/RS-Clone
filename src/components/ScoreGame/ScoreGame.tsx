import React, { useState, SyntheticEvent } from 'react';
// import './StartNewGame.css';
import Radio from '@material-ui/core/Radio';
import { connect } from 'react-redux';
// import { IProps } from './StartNewGame.models';

// import { useStyles } from './StartNewGame.style';

import StartNextLevel from '../StartNextLevel/StartNextLevel';

import { hero, locations, buttons } from '../data/variables';

import girlImgSrc from '../../assets/images/girl.png';
import boyImgSrc from '../../assets/images/boy.png';

import { AppState, GameState, Gender, Lang } from '../../store/types';

import { startNewLevel, setUserName, setGender } from '../../store/actions/startNewGameAction';

import { answers as answersAll } from '../data/answersHero';


export interface ScoreGameProps {
  // lang?: Lang;
  // userName?: string;
  // activeLevel?: number;
  // gender?: Gender;
  scoreGame?: number;
}

const ScoreGame = ( props: ScoreGameProps ) => {
  const { scoreGame } = props;
  // const classes = useStyles();

  const maxScore = answersAll.reduce((sum, item) => {
    if (Math.max.apply(null, item.score) > 0) {
      return sum + Math.max.apply(null, item.score);
    }
    return sum;
  }, 0);

  return (
    // {classes.startNewGame}
    <div className="start-page">
      <div className="messages-wrapper">
        <div className="greeting-message">
          Score: {scoreGame}/{maxScore}
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state: AppState) => ({
  // userName: state.game.userName,
  // gender: state.game.gender,
  // lang: state.game.lang,
  // activeLevel: state.game.activeLevel,
  scoreGame: state.game.scoreGame,
});

export default connect(mapStateToProps, null)(ScoreGame);