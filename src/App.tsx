import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HeaderMainMenu from './components/HeaderMenu/HeaderMainMenu';
import MainLayout from './components/MainLayout/MainLayout';

function App(): JSX.Element {
  return (
    <div className="App">
      <HeaderMainMenu />
      <MainLayout />
    </div>
  );
}

export default App;
