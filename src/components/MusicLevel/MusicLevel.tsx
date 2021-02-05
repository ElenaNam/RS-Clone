import React, { useState, SyntheticEvent } from 'react';
import { connect } from 'react-redux';

import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// import { soundsArr } from './components/SoundsArr/SoundsArr';
import { soundsArr } from '../SoundsArr/SoundsArr';

import { AppState, GameState, Gender, Lang } from '../../store/types';

import { answers as answersAll } from '../data/answersHero';
// import { useStyles } from './ScoreGame.style';

export interface MusicLevelProps {
  scoreGame?: number;
  activeLevel?: number;
}

const MusicLevel = ( props: MusicLevelProps ) => {
  const { scoreGame, activeLevel } = props;
  const level = activeLevel || 2;
  const soundSrc = soundsArr[level];

  // const audio = new Audio();
  // audio.preload = 'auto';
  // audio.src = soundSrc;
  // audio.play();
  
  // const classes = useStyles();


  return (
    <div className="start-page">
      <div className="messages-wrapper">
        <div className="no">
          {/* {audio.play()} */}
          <audio src={soundSrc}>
            <track
              default
              kind="captions"
              src="/media/examples/friday.vtt"
            />
          </audio>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  scoreGame: state.game.scoreGame,
  activeLevel: state.game.activeLevel,
});

export default connect(mapStateToProps, null)(MusicLevel);