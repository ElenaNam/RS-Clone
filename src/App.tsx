import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import HeaderMainMenu from './components/header-main-menu/header-main-menu';
import StartNewGame from './components/StartNewGame/StartNewGame';
import FirstLevel from './components/FirstLevel/FirstLevel';

function App() {

  const state = {
    activeLevel: 0,
  };

  const arrComps = [<StartNewGame key='1' />, <FirstLevel key='2' />];

  return (
    <div className="App">
      <HeaderMainMenu />

      {/* {(state.activeLevel === 0) && <StartNewGame />} */}
      {arrComps[state.activeLevel]}
    </div>
  );
}

export default App;
