import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import { Store } from 'redux';

import HeaderMainMenu from './components/header-main-menu/header-main-menu';
import StartNewGame from './components/StartNewGame/StartNewGame';
import FirstLevel from './components/FirstLevel/FirstLevel';
import SecondLevel from './components/SecondLevel/SecondLevel';
import FinalPage from './components/FinalPage/FinalPage';
import Home from './components/Home/Home';

import { AppState, GameState } from './store/types';

import { imagesArr } from './components/ImagesArr/ImagesArr';
import { soundsArr } from './components/SoundsArr/SoundsArr';

import { backgroundArr } from './components/ImagesArr/BackgroundArr';


import ThemeLayout from './components/Settings/Theme/ThemeLayot';
import HotkeysLayout from './components/Settings/Hotkeys/HotkeysLayot';
import Template from './components/Template/Template';
import Menu from './components/Menu/Menu';

import MusicLevel from './components/MusicLevel/MusicLevel';


export interface AppProps {
  userName?: string,
  gender?: 'girl' | 'boy',

  activeLevel?: number,
  lang?: 'ru' | 'en' | 'de',
  
}

function App(props: AppProps) {
  const { userName, gender, activeLevel = 0, lang } = props;
  // const state = {
  //   activeLevel: 0,
  // };

  // const arrComps = [<StartNewGame key='1' />, <FirstLevel key='2' />, <SecondLevel key='3' />];
  const arrComps = [
    <Home key="0" />,
    <StartNewGame key="1" />,
    <FirstLevel key="2" />,
    <SecondLevel
      key="3"
      imgs={[imagesArr[0], imagesArr[1], imagesArr[2]]}
      sound={soundsArr[0]}
      personageNums={[1, 2, 3]}
      backgoundImg={backgroundArr[1]}
    />,
    <SecondLevel
      key="4"
      imgs={[imagesArr[3], imagesArr[4], imagesArr[5]]}
      sound={soundsArr[0]}
      personageNums={[4, 5, 6]}
      backgoundImg={backgroundArr[2]}
    />,
    <SecondLevel
      key="5"
      imgs={[imagesArr[6], imagesArr[7], imagesArr[8]]}
      sound={soundsArr[0]}
      personageNums={[7, 8, 9]}
      backgoundImg={backgroundArr[3]}
    />,
    <FinalPage key="6" />
  ];
  console.log(props, activeLevel, userName, lang);

  return (     
    <ThemeLayout>
      <HotkeysLayout>
        <div className="App">
          <Menu /> 
          {arrComps[activeLevel]}

          {/* <Template />         */}
          <MusicLevel />
        </div>
      </HotkeysLayout>
    </ThemeLayout>
  );
}  



// function App(props: AppProps) {
//   const { userName, gender, activeLevel = 0, lang } = props;
//   // const state = {
//   //   activeLevel: 0,
//   // };

//   // const arrComps = [<StartNewGame key='1' />, <FirstLevel key='2' />, <SecondLevel key='3' />];
//   const arrComps = [
//     <StartNewGame key="1" />,
//     <SecondLevel
//       key="3"
//       imgs={[imagesArr[0], imagesArr[1], imagesArr[2]]}
//       personageNums={[1, 2, 3]}
//       backgoundImg={backgroundArr[1]}
//     />,
//     <SecondLevel
//       key="4"
//       imgs={[imagesArr[3], imagesArr[4], imagesArr[5]]}
//       personageNums={[4, 5, 6]}
//       backgoundImg={backgroundArr[2]}
//     />,
//     <SecondLevel
//       key="5"
//       imgs={[imagesArr[6], imagesArr[7], imagesArr[8]]}
//       personageNums={[7, 8, 9]}
//       backgoundImg={backgroundArr[3]}
//     />,
//   ];
//   console.log(props, activeLevel, userName, lang);
//   return (
//     <div className="App">
//       <HeaderMainMenu />
//       {/* <StartNewGame key='1' /> */}
//       {/* {(state.activeLevel === 0) && <StartNewGame />} */}
//       {arrComps[activeLevel]}
//     </div>
//   );
// }  




// function App(): JSX.Element {
//   return (     
//     <ThemeLayout>
//       <HotkeysLayout>
//         <div className="App">
//           <Menu /> 
//           <Template />        
//         </div>
//       </HotkeysLayout>
//     </ThemeLayout>
//   );
// }  







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
