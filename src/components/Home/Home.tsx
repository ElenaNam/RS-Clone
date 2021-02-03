import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.module.css';
import { Button, Typography } from '@material-ui/core';
import { buttons } from '../data/variables';

export default function Home(): JSX.Element {
  const lang = 'ru';
  return (
    <>
      <Typography>
        <p>Хорошо, что ты здесь! Нужны твои знания.</p>
        <p>Помоги герою безопасно добраться до цели.</p>
        <p>Помни о задании!</p>
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        component={NavLink} 
        to='/newgame'
      >
        {buttons[0][lang]}
      </Button>
    </>

  );
}
