import React from 'react';
import './Home.module.css';
import { Typography } from '@material-ui/core';

export default function Home(): JSX.Element {
  return (
    <Typography>
      <p>Хорошо, что ты здесь! Нужны твои знания.</p>
      <p>Помоги герою безопасно добраться до цели.</p>
      <p>Помни о задании!</p>
    </Typography>
  );
}
