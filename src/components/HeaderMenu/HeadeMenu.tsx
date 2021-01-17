import React from 'react';
import { Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { amber, orange, teal, lightBlue } from '@material-ui/core/colors';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Box } from '@material-ui/core';
import logo from '../../assets/images/logo_lf.png';

/* import { links } from '../data/menu'; */

import Home from '../Home/Home';
import NewGame from '../NewGame/NewGame';
/* import Game from '../NewGame/NewGame'; */
import Manual from '../Manual/Manual';
import Settings from '../Settings/Settings';
import Information from '../Information/Information';

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
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const history = createBrowserHistory();

export default function HeaderMenu(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router history={history}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          /* position="fixed" */
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
              <MenuIcon style={{ color: amber[50] }} />
            </IconButton>
            <Typography variant="h6" noWrap>
              <h3>ИГРА ПО БЕЗОПАСНОСТИ</h3>
              <h2>СФЕРА ДОВЕРИЯ</h2>
            </Typography>
            <Box>
              <img src={logo} alt="logo" />
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
          <List>
            <ListItem button component={Link} to="/home">
              <ListItemIcon>
                <InboxIcon color="secondary" />
              </ListItemIcon>
              {/* <ListItemText primary={links[0].ru} /> */}
              <ListItemText primary="Главная" />
            </ListItem>

            <ListItem button component={Link} to="/newgame">
              <ListItemIcon>
                <InboxIcon style={{ color: orange[900] }} />
              </ListItemIcon>
              {/* <ListItemText primary={links[1].ru} /> */}
              <ListItemText primary="Новая игра" />
            </ListItem>

            <ListItem button component={Link} to="/newgame">
              <ListItemIcon>
                <MailIcon color="primary" />
              </ListItemIcon>
              {/* <ListItemText primary={links[2].ru} /> */}
              <ListItemText primary="Продолжить" />
            </ListItem>

            <ListItem button component={Link} to="/manual">
              <ListItemIcon>
                <InboxIcon style={{ color: amber[400] }} />
              </ListItemIcon>
              {/* <ListItemText primary={links[3].ru} /> */}
              <ListItemText primary="Инструкция" />
            </ListItem>

            <ListItem button component={Link} to="/settings">
              <ListItemIcon>
                <MailIcon style={{ color: lightBlue[800] }} />
              </ListItemIcon>
              {/* <ListItemText primary={links[4].ru} /> */}
              <ListItemText primary="Настройки" />
            </ListItem>

            <ListItem button component={Link} to="/information">
              <ListItemIcon>
                <InboxIcon style={{ color: teal[800] }} />
              </ListItemIcon>
              {/* <ListItemText primary={links[5].ru} /> */}
              <ListItemText primary="О разработчиках" />
            </ListItem>
          </List>
        </Drawer>

        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Typography>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/newgame" component={NewGame} />
              {/* <Route exact path='/game'" component={} /> */}
              <Route exact path="/manual" component={Manual} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/information" component={Information} />
              <Redirect from="/" to="/home" />
            </Switch>
          </Typography>

          {/*           <Typography paragraph>
            <p>Хорошо, что ты здесь! Нужны твои знания.</p>
            <p>Помоги герою безопасно добраться до цели!</p>
            <p>Помни о задании!</p>
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography> */}
        </main>
      </div>
    </Router>
  );
}
