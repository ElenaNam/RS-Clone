import { Button } from '@material-ui/core';
import React from 'react';
import './Settings.module.css';

export default function Settings(): JSX.Element {
  return (
    <div>
      <Button
        style={{ margin: 30 }}
        variant="contained"
        color="secondary"
        onClick={() => {
          window.localStorage.setItem('theme', 'light');
          window.location.reload();
        }}
      >
        Светлая тема
      </Button>

      <Button
        style={{ margin: 30 }}
        variant="contained"
        color="primary"
        onClick={() => {
          window.localStorage.setItem('theme', 'dark');
          window.location.reload();
        }}
      >
        Тёмная тема
      </Button>
    </div>
  );
}
