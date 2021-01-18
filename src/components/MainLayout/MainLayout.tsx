import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
/* import styles from './MainLayout.module.css'; */
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Home from '../Home/Home';
import NewGame from '../NewGame/NewGame';
/* import Game from '../NewGame/NewGame'; */
import Manual from '../Manual/Manual';
import Settings from '../Settings/Settings';
import Information from '../Information/Information';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    marginTop: theme.spacing(12),

    maxWidth: 1280,
  },
}));

export default function MainLayout(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <main className={classes.main}>
      {/* <div className={styles.main}> */}
      <Switch>
        {/* <Redirect from="/" to="/home" /> */}
        <Route exact path="/home" component={withRouter(Home)} />
        <Route exact path="/newgame" component={withRouter(NewGame)} />
        {/* <Route exact path='/game'" component={} /> */}
        <Route exact path="/manual" component={Manual} />
        <Route exact path="/settings" component={withRouter(Settings)} />
        <Route exact path="/information" component={withRouter(Information)} />
      </Switch>
    </main>
  );
}
