import React from 'react';
import { Switch, Route, Redirect, withRouter, NavLink } from 'react-router-dom'; 

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import logo from '../../assets/images/logo_rs.png';
import DraggableDialog from '../Dialog/Dialog';
import MenuDialog from '../Dialog/Dialog copy';

import { Links, links } from '../data/menu';

export function ListMenuCopy(): JSX.Element {
  const theme = useTheme();
  const lang = 'ru'; 
  return (
    <List>
      {links.map((item: Links, index: number) => (
        <ListItem          
          key={item.id}  
        >
          <ListItemIcon>
            {index % 2 === 0 ? (
              <DoneOutlineRoundedIcon
                style={{ color: theme.palette.warning.light }}
              />
            ) : (
              <DoneOutlineRoundedIcon
                style={{ color: theme.palette.error.main }}
              />
            )}
          </ListItemIcon>
    
          {/* <ListItemText primary={item[lang]} /> */}
        </ListItem>
      ))}
      <Box mt={15}>
        <a href='https://rs.school/js/' target="_blank" rel='noreferrer'>
          <img src={logo} alt="logo_rsschool" width="60%" />
        </a>
      </Box>
      <Route exact path="/information" component={withRouter(DraggableDialog)} /> 
    </List>
  );
}
