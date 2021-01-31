import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React from 'react';
/* import { HotKeys } from 'react-hotkeys'; */
import AudioApp from './AudioApp';
import './Settings.module.css';
import ThemeToggler from './Theme/ThemeToggler';


/* const keyMap = {
  LIGHT_THEME: 'o',
  DARK_THEME: 'p',
}; */
const useStyles = makeStyles(() => ({  
/*   hotkeys: {
    outline: 'none',
  }, */
  content1: {      
    borderRadius: '10px', 
    backgroundColor: 'rgba(237, 236, 229, .5)'   
  },
  content2: {   
    display: 'flex',  
    justifyContent: 'center', 
    borderRadius: '10px',    
    marginTop: '30px',
    marginBottom: '30px',
    backgroundColor: 'rgba(238, 238, 235, .5)' 
  },
}));



export default function Settings(): JSX.Element {
  const classes = useStyles();

  return (    
    <>    
      <Container maxWidth="sm" className={classes.content1}>
        <ThemeToggler />
      </Container>
      <Container maxWidth="sm" className={classes.content2}>
        <AudioApp />
      </Container>
    </>
  );
}
