import React from 'react';
import './Information.module.css';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';

export default function Information(): JSX.Element {
  return (
    <>
      <Container maxWidth="sm" style={{ marginBottom: '20px' }}>
        <Typography variant="body1">
          Данная игра является финальным проектом студентов курса
          «JavaScript/Front-end» от The Rolling Scopes.
        </Typography>
      </Container>

      <Container maxWidth="sm" style={{ marginBottom: '20px' }}>
        <Typography>
          Игра создана nickaya112 и ElenaNam при поддержке друг друга и с
          использованием бесценного опыта, полученного при обучении, а также
          метода научного тыка.
        </Typography>
      </Container>

      <Typography>Выпуск «JavaScript/Front-end» 2020-Q3</Typography>
      <Typography>Год создания игры - 2021.</Typography>
    </>
  );
}
