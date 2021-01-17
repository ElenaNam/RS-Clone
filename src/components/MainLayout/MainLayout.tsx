import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import styles from './MainLayout.module.css';

import Home from '../Home/Home';
import NewGame from '../NewGame/NewGame';
/* import Game from '../NewGame/NewGame'; */
import Manual from '../Manual/Manual';
import Settings from '../Settings/Settings';
import Information from '../Information/Information';

export default function MainLayout(): JSX.Element {
  return (
    /*     <div className={styles.main}>
      <Typography>
        <p>Хорошо, что ты здесь! Нужны твои знания.</p>
        <p>Помоги герою безопасно добраться до цели.</p>
        <p>Помни о задании!</p>
      </Typography>
    </div> */
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/newgame" component={NewGame} />
      {/* <Route exact path='/game'" component={} /> */}
      <Route exact path="/manual" component={Manual} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/information" component={Information} />
      <Redirect from="/" to="/home" />
    </Switch>
  );
}
