import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import { useTheme } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import Box from '@material-ui/core/Box';
import logoRs from '../../assets/images/logo_rs.svg';

export default function ListMenu(props): JSX.Element {
  const theme = useTheme();
  return (
    <List>
      {props.map((item: object, index: number) => (
        <ListItem button key={item.id} component={Link} to={item.link}>
          {console.log(item)}
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
      <ListItem>
        <Box>
          <img src={logoRs} alt="logo_rsschool" />
        </Box>
      </ListItem>
    </List>
  );
}
