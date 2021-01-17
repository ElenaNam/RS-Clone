import React from 'react';
import { Typography } from '@material-ui/core';
import styles from './MainLayout.module.css';

export default function MainLayout(): JSX.Element {
  return (
    <div className={styles.main}>
      <Typography>
        <p>Хорошо, что ты здесь! Нужны твои знания.</p>
        <p>Помоги герою безопасно добраться до цели.</p>
        <p>Помни о задании!</p>
      </Typography>
    </div>
  );
}
