import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

const storage = {
  getItem(key: string): string | null {
    if (localStorage) {
      return localStorage.getItem(key);
    }
    return null;
  },
  setItem(key: string, value: string) {
    if (localStorage) {
      return localStorage.setItem(key, value);
    }
    return null;
  }
};

export interface Props  { 
  children: React.ReactNode 
}

const ThemeProvider = (props: Props)=> {  
  const [darkMode, setDarkMode] = useState(
    storage.getItem('darkMode') === 'true'
  ); 
  
  const onSetDarkMode = (mode: boolean) => {
    setDarkMode(mode);
    storage.setItem('darkMode', mode.toString());
  };  
  return (   
    <ThemeContext.Provider    
      value={{
        darkMode,
        onSetDarkMode        
      }}     
    >
      {props.children} 
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;