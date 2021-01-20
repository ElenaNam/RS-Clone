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
  /* const { linksArray }: object[] = props; */
  return (
    <List>
      {links.map((item: Links, index: number) => (
        <ListItem
          button
          key={item.id}
          component={NavLink}
          exact
          to={item.link}
          activeStyle={{ color: 'green' }}
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
          <ListItemText primary={item.ru} />
        </ListItem>
      ))}
      <Box mt={15}>
        <NavLink to="/rss" target="_blank">
          <img src={logo} alt="logo_rsschool" width="60%" />
        </NavLink>
      </Box>
    </List>
  );
}
