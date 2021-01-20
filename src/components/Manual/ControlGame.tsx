import React from 'react';
import './Manual.module.css';
import Typography from '@material-ui/core/Typography';
import { Container, ListItemText } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { useTheme } from '@material-ui/core/styles';

export default function ControlGame(): JSX.Element {
  const theme = useTheme();
  return (
    <Container maxWidth="sm">
      <Typography paragraph>
        Управлять игрой можно с помощью мыши или с клавиатуры.
      </Typography>
      <Typography paragraph>
        Для того, чтобы настроить клавиши управления:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <Filter1Icon style={{ color: theme.palette.error.main }} />
          </ListItemIcon>
          <ListItemText primary="открой меню" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <Filter2Icon style={{ color: theme.palette.success.light }} />
          </ListItemIcon>
          <ListItemText primary="выбери пункт 'Настройки'" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <Filter3Icon style={{ color: theme.palette.warning.light }} />
          </ListItemIcon>
          <ListItemText primary="и сделай что-нибудь" />
        </ListItem>
      </List>
      <Typography variant="subtitle1">Здесь будет скриншот</Typography>
    </Container>
  );
}
