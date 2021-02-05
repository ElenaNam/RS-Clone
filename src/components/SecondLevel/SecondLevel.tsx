import React, { useState, SyntheticEvent } from 'react';
import Radio from '@material-ui/core/Radio';
import { connect } from 'react-redux';
// import { IProps } from './StartNewGame.models';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import StartNextLevel from '../StartNextLevel/StartNextLevel';

import { hero, locations, buttons } from '../data/variables';

// import girlImgSrc from '../../assets/images/girl.png';

import { AppState } from '../../store/types';

import { startNewLevel } from '../../store/actions/startNewGameAction';
import { useStyles } from './SecondLevel.style';

import SimpleDialogDemo from '../DialogWindow/DialogWindow';

import PersonSimple from '../PersonSimple/PersonSimple';
import ScoreGame from '../ScoreGame/ScoreGame';

export interface SecondLevelProps {
  gender: string;
  userName: string;
  startNewLevel: () => void;

  imgs: string[];
  personageNums: number[];
  backgoundImg: string;
}

const SecondLevel = (props: SecondLevelProps) => {
  // хранить колличество пройденных персонажей
  const [countExecutePersons, setCountExecutePersons] = useState(0);
  const { userName, gender, imgs, personageNums, backgoundImg } = props;
  const classes = useStyles();
  const [scoreLevel, setScoreLevel] = useState(0);
  const [counterCompletedPers, setCounterCompletedPers] = useState(0);


  const addScoreToLevelScore = (score: number) => {
    setScoreLevel(scoreLevel + score);
    setCounterCompletedPers(prev => prev + 1);

    if (counterCompletedPers === imgs.length - 1) {
      props.startNewLevel();
    }
  };

  const BackgroundHead = {
    backgroundImage: `url(${backgoundImg})`,
    // width: '100%',
  };

  return (
    <Box className={classes.pageWrapperMain}>
      <Box className={classes.pageWrapper} display="flex" justifyContent="space-between" flexDirection="column" style={BackgroundHead}>
        <ScoreGame />

        <Box className={classes.personsBlock}>
          {/* <ScoreGame /> */}
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="flex-end"
          >
            {imgs.map((img, index) => (
              <SimpleDialogDemo
                key={personageNums[index]}
                imgSrc={img}
                personageNum={personageNums[index]}
                addScoreToLevelScore={addScoreToLevelScore}
              />
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state: AppState) => ({
  userName: state.game.userName,
  gender: state.game.gender,
});

const mapDispatchToProps = {
  startNewLevel,
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondLevel);
// alignSelf="flex-end"