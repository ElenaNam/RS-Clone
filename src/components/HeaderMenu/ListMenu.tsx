import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';

export default function ListMenu(props): JSX.Element {
  return (
    <List>
      {props.map((item: object, index: number) => (
        <ListItem button key={item.id} component={Link} to={item.link}>
          <ListItemIcon>
            {index % 2 === 0 ? (
              <DoneOutlineRoundedIcon color="primary" />
            ) : (
              <DoneOutlineRoundedIcon color="secondary" />
            )}
          </ListItemIcon>
          <ListItemText primary={item.ru} />
        </ListItem>
      ))}
    </List>
  );
}
