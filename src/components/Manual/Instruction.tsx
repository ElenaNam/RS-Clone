import React from 'react';
import './Manual.module.css';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

export default function Instruction(): JSX.Element {
  return (
    <Container maxWidth="sm">
      <Typography paragraph>Пойди туда не знаю куда</Typography>
    </Container>
  );
}
