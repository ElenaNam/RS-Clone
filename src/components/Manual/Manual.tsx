import React from 'react';
import './Manual.module.css';
/* import Typography from '@material-ui/core/Typography'; */
import { Container } from '@material-ui/core';
import ControlGame from './ControlGame';
import Instruction from './Instruction';


export default function Manual(): JSX.Element {
  return (
    <Container maxWidth="sm">
      <ControlGame />
      <Instruction />
    </Container>
  );
}
