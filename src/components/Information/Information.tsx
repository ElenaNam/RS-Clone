import React from 'react';
import './Information.module.css';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container'; 
import { textInformation } from '../data/textInformation';

export default function Information(): JSX.Element {
  const lang = 'ru';
  return (
    <Container maxWidth='sm'>
      {textInformation.map((paragraph) => (
        <Typography 
          variant='body1' 
          key={paragraph.id}
          style={{ marginBottom: 20 }}
        >
          {paragraph[lang]}
        </Typography>
      ))}
    </Container>
  );
}

