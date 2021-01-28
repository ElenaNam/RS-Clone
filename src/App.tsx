import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ThemeLayout from './components/Settings/Theme/ThemeLayot';
import Context from './components/Context';

// import logo from './logo.svg';
import './App.css';
import HeaderMainMenu from './components/HeaderMenu/HeaderMainMenu';
import MainLayout from './components/MainLayout/MainLayout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      marginTop: theme.spacing(5),
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 240,
    },
  })
);


function App(): JSX.Element {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const isOpen = (val:boolean)=> (setOpen(val));

  const value = {
    open,
    isOpen
  };


  return (    
    <Context.Provider value={value}>     
      <ThemeLayout>
        <div className="App">
          <HeaderMainMenu />        
          <div className={clsx(classes.content, { [classes.contentShift]: open,
          })}
          >
            <MainLayout />
          </div>               
        </div>
      </ThemeLayout>
    </Context.Provider>
 
  );
} 

export default App;
