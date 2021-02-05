import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container/Container';
import { Paper } from '@material-ui/core';
import Home from '../Home/Home';
/* import NewGame from '../NewGame/NewGame'; */
/* import Game from '../NewGame/NewGame'; */
import Manual from '../Manual/Manual';
import Settings from '../Settings/Settings';
import Information from '../Information/Information';
import FinalPage from '../FinalPage/FinalPage';
import Template from '../Template/Template';
import DraggableDialog from '../Dialog/Dialog';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    position: 'absolute',
    right: 0,
    left: 0,
    marginTop: theme.spacing(20),
    maxWidth: 1280,
    alignItems: 'center',   
  },
  
}));

export default function MainLayout(): JSX.Element {
  const classes = useStyles();  
  return (
    <Container className={classes.root}>
      <Paper>
        <Switch>
          {/* <Route exact path="/home" component={Home} /> */}
          {/* <Route exact path="/home" component={withRouter(Home)} /> */}
          {/* <Route exact path="/newgame" component={withRouter(Template)} /> */} 
          {/* <Route exact path="/game" component={withRouter(FinalPage)} /> */}   
          {/* <Route exact path="/manual" component={Manual} /> */}
          {/* <Route exact path="/settings" component={withRouter(Settings)} /> */}
          {/* <Route exact path="/information" component={withRouter(Information)} /> */}
          {/* <Route exact path="/information" component={withRouter(DraggableDialog)} />  */}

          {/* <Redirect from="/" to="/home" /> */}

        </Switch>
      </Paper>

    </Container>
  );
}
