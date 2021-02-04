import React, { useState, SyntheticEvent } from 'react';
import { connect } from 'react-redux';

import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import { AppState, GameState, Gender, Lang } from '../../store/types';

import { answers as answersAll } from '../data/answersHero';
import { useStyles } from './ScoreGame.style';

export interface ScoreGameProps {
  scoreGame?: number;
}

const ScoreGame = ( props: ScoreGameProps ) => {
  const { scoreGame } = props;
  const newScoreGame = scoreGame || 0;
  const classes = useStyles();

  const maxScore = answersAll.reduce((sum, item) => {
    if (Math.max.apply(null, item.score) > 0) {
      return sum + Math.max.apply(null, item.score);
    }
    return sum;
  }, 0);

  return (
    <div className="start-page">
      <div className="messages-wrapper">
        <div className={classes.greetingMessage}>
          <LinearWithValueLabel currentScore={newScoreGame} maxScore={maxScore} />
          Score: {scoreGame}/{maxScore}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  scoreGame: state.game.scoreGame,
});

export default connect(mapStateToProps, null)(ScoreGame);


function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export interface LinearWithValueLabelProps {
  currentScore: number;
  maxScore: number;
}

function LinearWithValueLabel(props: LinearWithValueLabelProps) {
  const { currentScore, maxScore } = props;
  const classes = useStyles();

  const progressNew = currentScore * 100 / maxScore;

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progressNew} />
    </div>
  );
}