import React from 'react';
import './App.css';
import ThemeLayout from './components/Settings/Theme/ThemeLayot';
import HotkeysLayout from './components/Settings/Hotkeys/HotkeysLayot';
import Template from './components/Template/Template';
import Menu from './components/Menu/Menu';

function App(): JSX.Element {
  return (     
    <ThemeLayout>
      <HotkeysLayout>
        <div className="App">
          <Menu /> 
          <Template />        
        </div>
      </HotkeysLayout>
    </ThemeLayout>
  );
}  

export default App;
