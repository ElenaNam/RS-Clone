import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import logo from '../../assets/images/logo_rs.png';

import { Links, links } from '../data/menu';

export function ListMenu(): JSX.Element {
  const theme = useTheme();
  const lang = 'ru'; 
  return (
    <List>
      {links.map((item: Links, index: number) => (
        <ListItem
          button
          key={item.id}
          component={NavLink}
          exact
          to={item.link}
          activeStyle={{ color: '#1565c0' }}
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
          <ListItemText primary={item[lang]} />
        </ListItem>
      ))}
      <Box mt={15}>
        <a href='https://rs.school/js/' target="_blank" rel='noreferrer'>
          <img src={logo} alt="logo_rsschool" width="60%" />
        </a>
      </Box>
    </List>
  );
}
