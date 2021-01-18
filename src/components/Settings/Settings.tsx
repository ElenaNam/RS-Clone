import Container from '@material-ui/core/Container';
import React from 'react';
import { HotKeys } from 'react-hotkeys';

import './Settings.module.css';
import SwitchTheme from './SwitchTheme';

const keyMap = {
  LIGHT_THEME: 'o',
  DARK_THEME: 'p',
};

export default function Settings(): JSX.Element {
  return (
    <HotKeys keyMap={keyMap}>
      <Container>
        <SwitchTheme />
      </Container>
    </HotKeys>
  );
}
