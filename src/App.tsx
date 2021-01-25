import React from 'react';

// import logo from './logo.svg';
import './App.css';
import HeaderMainMenu from './components/HeaderMenu/HeaderMainMenu';
import MainLayout from './components/MainLayout/MainLayout';

function App(): JSX.Element {
  return (
    <>
      {/*       <Head>
        <title>Игра</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head> */}
      <div className="App">
        <HeaderMainMenu />
        <MainLayout />
      </div>
    </>
  );
}

export default App;
