import React, { useContext } from 'react';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ClickAwayListener, Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { amber } from '@material-ui/core/colors';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { ListMenu } from './ListMenu';
import { titleHeader, subtitleHeader } from '../data/textHeader';

import logo from '../../assets/images/logo_lf.png';
import Context from '../Context';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolBar: {
    backgroundColor: 'orange',
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {},
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#e1f5fe',
    
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1), 
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',    
    borderBottom: '1px solid #0D0D0D'
  }
}));

export default function HeaderMenu(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const lang = 'ru';
  /* const value = useContext(Context);  */  
  const { open, isOpen } = useContext(Context);   

  const handleDrawerOpen = () => {
    isOpen(true);
  };

  const handleDrawerClose = () => {
    isOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleDrawerClose}>
      <div className={classes.root}>
        <CssBaseline />      
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classes.toolBar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon style={{ color: amber[50], fontSize: 60 }} />
            </IconButton>
            <div>
              <Box
                style={{color: '#0D0D0D'}}            
                fontFamily="h6.fontFamily"
                fontSize={{ xs: 12, sm: 'h5.fontSize', md: 'h4.fontSize' }}
                p={{ xs: 1, sm: 1, md: 1, lg: 1 }} 
              >
                {titleHeader[lang]}
              </Box>    
              <Box
                style={{color: '#0D0D0D'}}                 
                fontWeight="fontWeightBold"                            
                fontFamily="h5.fontFamily"
                fontSize={{ xs: 16, sm: 'h4.fontSize', md: 'h3.fontSize' }}            
              >
                {`"${subtitleHeader[lang]}"`}
              </Box>    
            </div>
            
            <Box>
              <a href='https://vk.com/lf_samara' target="_blank" rel='noreferrer'>
                <img src={logo} alt="logo" width='100px' />
              </a>              
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton style={{color: 'DarkOrange'}} onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <ListMenu />
        </Drawer>     
      </div>
    </ClickAwayListener>
  );
}
