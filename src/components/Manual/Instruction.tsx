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

export default function Instruction(): JSX.Element {
  const theme = useTheme();
  return (
    <Container maxWidth="sm">
      <Typography paragraph>Пойди туда не знаю куда</Typography>
    </Container>
  );
}
