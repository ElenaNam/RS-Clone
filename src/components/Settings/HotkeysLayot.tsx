/* eslint-disable no-console */
import React, { useContext } from 'react';
import { GlobalHotKeys } from 'react-hotkeys';
import ThemeContext from './Theme/ThemeContext';

const keyMap = {
  THEME: 't'
};




export interface Props  { 
  children: React.ReactNode  
}

const HotkeysLayout = (props: Props) => {  
  const context = useContext(ThemeContext);

  const handlers = {
    'THEME': () => context.onSetDarkMode(!context.darkMode),
  };

  const { children } = props;
  return (
    <GlobalHotKeys 
      keyMap={keyMap} 
      handlers={handlers}       
      style={{ outline: 'none' }}
    >      
      {children}
    </GlobalHotKeys>
  );
};

export default HotkeysLayout;