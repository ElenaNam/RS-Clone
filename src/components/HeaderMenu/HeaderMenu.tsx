import React, { useContext } from 'react';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { amber } from '@material-ui/core/colors';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
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
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1), 
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor: '#FF7100',
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
            <Typography variant='subtitle1'>{titleHeader[lang]}</Typography>
            <Typography variant='h4'>{`"${subtitleHeader[lang]}"`}</Typography> 
          </div>
         
          <Box>
            <NavLink to="/lf" target="_blank">
              <img src={logo} alt="logo" />
            </NavLink>
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
          <IconButton onClick={handleDrawerClose}>
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
  );
}
