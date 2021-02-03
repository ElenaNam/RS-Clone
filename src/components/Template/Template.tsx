import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from '../Home/Home';
import FinalPage from '../FinalPage/FinalPage';
import Game from './GameGame';




function Template(): JSX.Element {
  return (      
    <div style={{ width: 1280, height: 800, background: 'red', color: 'wheat', marginTop: 150 }}>      
      <Switch>        
        <Route exact path="/home" component={withRouter(Home)} />   {/* главная */}
        <Route exact path="/newgame" component={withRouter(Game)} /> {/* новая игра */}
        <Route exact path="/game" component={withRouter(FinalPage)} />   {/* продолжить */}        
      </Switch>
    </div>    
  );
} 

export default Template;