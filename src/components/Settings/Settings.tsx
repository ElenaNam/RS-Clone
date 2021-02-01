import { Grid, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React from 'react';
/* import { HotKeys } from 'react-hotkeys'; */
import AudioApp from './AudioApp';
import './Settings.module.css';
import ThemeToggler from './Theme/ThemeToggler';
import SettingsCard from './SettingsCard';
import LangApp from './Lang/LangApp';
import HotkeysList from './Hotkeys/HotkeysList';


/* const keyMap = {
  LIGHT_THEME: 'o',
  DARK_THEME: 'p',
}; */
const useStyles = makeStyles(() => ({  
/*   hotkeys: {
    outline: 'none',
  }, */
  root: {
    flexGrow: 1,
  },
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
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} lg={4}>
          <SettingsCard title='Тема'>
            <ThemeToggler />
          </SettingsCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SettingsCard title='Звук'>
            <AudioApp />
          </SettingsCard> 
        </Grid>      
        <Grid item xs={12} sm={6} lg={4}>
          <SettingsCard title='Язык'>
            <LangApp />
          </SettingsCard> 
        </Grid>      
        <Grid item xs={12} sm={6} lg={4}>
          <SettingsCard title='Горячие клавиши'>
            <HotkeysList />
          </SettingsCard> 
        </Grid>      
      </Grid>
    </div>

  );
}
