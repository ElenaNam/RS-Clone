import React, { useState, SyntheticEvent } from 'react';
// import './StartNewGame.css';
import Radio from '@material-ui/core/Radio';
import { connect } from 'react-redux';
// import { IProps } from './StartNewGame.models';

// import { useStyles } from './StartNewGame.style';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import StartNextLevel from '../StartNextLevel/StartNextLevel';

import { hero, locations, buttons } from '../data/variables';

import girlImgSrc from '../../assets/images/girl.png';

import { AppState } from '../../store/types';

import { startNewLevel } from '../../store/actions/startNewGameAction';
import { useStyles } from './SecondLevel.style';

import SimpleDialogDemo from '../DialogWindow/DialogWindow';

import img1 from '../../assets/images/personage/personage1.png';
import img2 from '../../assets/images/personage/personage2.png';
import img3 from '../../assets/images/personage/personage3.png';
// import img4 from '../../assets/images/personage/personage0.png';

import PersonSimple from '../PersonSimple/PersonSimple';


const SecondLevel = (props) => {
  // хранить колличество пройденных персонажей
  const arrPersons = [];
  const [countExecutePersons, setCountExecutePersons] = useState(0);

  if (countExecutePersons === arrPersons.length) {
    alert('уровень пройден');
  }

  const { userName, gender } = props;
  const classes = useStyles();

    
  const [count, setCount] = useState(0);

  const handleGender = (e) => {
    // e.target.value && setGender(e.target.value);

    // setGender(e.target.value);
  };

  const handleStartNewLevel = () => {
    props.startNewLevel();
    // <StartNextLevel />;
  };

  return (
    <Box className={classes.pageWrapper} display="flex">
      <Box className={classes.personsBlock} alignSelf="flex-end">
      
        {/* <SimpleDialogDemo /> */}

        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="flex-end" 
        >
          <SimpleDialogDemo imgSrc={img2} personageNum={2} />
          <PersonSimple img={img1} />
          <PersonSimple img={img2} />
          <PersonSimple img={img3} />
        </Grid>

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