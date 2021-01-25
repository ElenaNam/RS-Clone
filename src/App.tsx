import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import HeaderMainMenu from './components/header-main-menu/header-main-menu';
import StartNewGame from './components/StartNewGame/StartNewGame';
import FirstLevel from './components/FirstLevel/FirstLevel';
import SecondLevel from './components/SecondLevel/SecondLevel';

import { AppState, GameState } from './store/types';



function App(props: GameState) {
  const { userName, gender, activeLevel, lang } = props;
  // const state = {
  //   activeLevel: 0,
  // };

  const arrComps = [<StartNewGame key='1' />, <FirstLevel key='2' />, <SecondLevel key='3' />];
  console.log(props, activeLevel, userName, lang);
  return (
    <div className="App">
      <HeaderMainMenu />
      {/* <StartNewGame key='1' /> */}
      {/* {(state.activeLevel === 0) && <StartNewGame />} */}
      {arrComps[activeLevel]}
    </div>
  );
}


// const mapStateToProps = (state: AppState) => ({
//   userName: state.userName,
//   gender: state.gender,
//   lang: state.lang,
//   activeLevel: state.activeLevel,
// });

const mapStateToProps = (state: AppState) => {
  console.log(state);
  return {
  
    userName: state.game.userName,
    gender: state.game.gender,
    lang: state.game.lang,
    activeLevel: state.game.activeLevel,
  };
};

// const mapStateToProps = (state: AppState) => state;

const mapDispatchToProps = null;
// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
