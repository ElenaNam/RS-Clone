import { Button } from '@material-ui/core';
import React from 'react';
import { HotKeys } from 'react-hotkeys';
import './Settings.module.css';

export default function SwitchTheme(): JSX.Element {
  const clickLight = () => {
    window.localStorage.setItem('theme', 'light');
    window.location.reload();
  };
  const clickDark = () => {
    window.localStorage.setItem('theme', 'dark');
    window.location.reload();
  };

  const handlers = {
    LIGHT_THEME: clickLight,
    DARK_THEME: clickDark,
  };

  return (
    <HotKeys handlers={handlers}>
      <Button
        style={{ margin: 30 }}
        variant="contained"
        color="secondary"
        onClick={clickLight}
      >
        Светлая тема
      </Button>

      <Button
        style={{ margin: 30 }}
        variant="contained"
        color="primary"
        onClick={clickDark}
      >
        Тёмная тема
      </Button>
    </HotKeys>
  );
}
