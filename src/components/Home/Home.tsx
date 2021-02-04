import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.module.css';
import { Button, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { buttons } from '../data/variables';



import { AppState, Lang } from '../../store/types';
import { setLanguage, startNewLevel } from '../../store/actions/startNewGameAction';
/* import FormLabel from '@material-ui/core/FormLabel'; */

export interface HomeProps {
  lang: Lang;

  startNewLevel: () => void;
}

const Home = (props: HomeProps) => {
  const { lang } = props;
  const handleClickStartNewGame = () => {
    props.startNewLevel();
  };
  // const lang = 'ru';
  return (
    <>
      <Typography>
        <p>Хорошо, что ты здесь! Нужны твои знания.</p>
        <p>Помоги герою безопасно добраться до цели.</p>
        <p>Помни о задании!</p>
      </Typography>
      <Button 
        onClick={handleClickStartNewGame}
        // variant="contained" 
        color="primary" 
        // component={NavLink} 
        // to='/newgame'
      >
        {buttons[0][lang]}
      </Button>
    </>

  );
};

const mapStateToProps = (state: AppState) => ({
  lang: state.game.lang,
});

const mapDispatchToProps = {
  startNewLevel,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
