import React, { useContext } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';
import ThemeContext from './ThemeContext';

export interface Props  { 
  children: React.ReactNode  
}

const ThemeLayout = (props: Props) => {

  const context = useContext(ThemeContext);
  const theme = context.darkMode ? darkTheme : lightTheme;
  const { children } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />       
      {children}     
    </MuiThemeProvider>
  );
};

export default ThemeLayout;