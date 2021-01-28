import React from 'react';

export default React.createContext({
  darkMode: false,
  onSetDarkMode: (mode: boolean) => {}
});
