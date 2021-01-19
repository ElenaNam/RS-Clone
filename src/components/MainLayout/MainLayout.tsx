import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
/* import styles from './MainLayout.module.css'; */
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container/Container';
import Home from '../Home/Home';
import NewGame from '../NewGame/NewGame';
/* import Game from '../NewGame/NewGame'; */
import Manual from '../Manual/Manual';
import Settings from '../Settings/Settings';
import Information from '../Information/Information';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(12),
    maxWidth: 1280,
    alignItems: 'center',
  },
}));

export default function MainLayout(): JSX.Element {
  const classes = useStyles();
  return (
    <Container className={classes.main}>
      <Switch>
        {/* <Redirect to="/home" /> */}
        {/* <Route exact path="/home" component={Home} /> */}
        <Route exact path="/home" component={withRouter(Home)} />
        <Route exact path="/newgame" component={withRouter(NewGame)} />
        {/* <Route exact path='/game'" component={} /> */}
        <Route exact path="/manual" component={Manual} />
        <Route exact path="/settings" component={withRouter(Settings)} />
        <Route exact path="/information" component={withRouter(Information)} />
      </Switch>
    </Container>
  );
}
