import { Container } from '@material-ui/core';
import React from 'react';
import './Settings.module.css';
import SwitchTheme from './SwitchTheme';

export default function Settings(): JSX.Element {
  return (
    <Container>
      <SwitchTheme />
    </Container>
  );
}
