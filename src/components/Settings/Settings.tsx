import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
/* import { HotKeys } from 'react-hotkeys'; */
import { connect } from 'react-redux';
import AudioApp from './AudioApp';
import './Settings.module.css';
import ThemeToggler from './Theme/ThemeToggler';
import SettingsCard from './SettingsCard';
import LangApp from './Lang/LangApp';
import HotkeysList from './Hotkeys/HotkeysList';
import { titleArr } from '../data/textSettings';


import { AppState, GameState, Gender, Lang } from '../../store/types';


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

export interface SettingsProps {
  lang?: Lang;
}


const Settings = ( props: SettingsProps ) => {
  const { lang = 'ru' } = props;
  // const lang = 'ru';

  const classes = useStyles();

  return (    
    <div className={classes.root}>
      <Grid container spacing={5} style={{marginBottom: 10}}>
        <Grid item xs={12} sm={6} lg={4}>
          <SettingsCard title={titleArr[0][lang]}>
            <ThemeToggler />
          </SettingsCard>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} style={{marginBottom: 10}}>
          <SettingsCard title={titleArr[1][lang]}>
            <AudioApp />
          </SettingsCard> 
        </Grid>      
        <Grid item xs={12} sm={6} lg={4} style={{marginBottom: 10}}>
          <SettingsCard title={titleArr[2][lang]}>
            <LangApp />
          </SettingsCard> 
        </Grid>      
        {/* <Grid item xs={12} sm={6} lg={4}>
          <SettingsCard title='Горячие клавиши'>
            <HotkeysList />
          </SettingsCard> 
        </Grid>  */}     
      </Grid>
    </div>

  );
};

const mapStateToProps = (state: AppState) => ({
  lang: state.game.lang,
});

export default connect(mapStateToProps, null)(Settings);