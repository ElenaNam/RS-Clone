import React from 'react';

import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container'; 
import { useStyles } from './Information.style';
import { textInformation } from '../data/textInformation';


export default function Information(): JSX.Element {
  const lang = 'ru';
  const classes = useStyles();
  return (
    <Container maxWidth='sm' className={classes.root}>
      {textInformation.map((paragraph) => (
        <Typography 
          variant='body1' 
          key={paragraph.id}
          className={classes.text}
        >
          {paragraph[lang]}
        </Typography>
      ))}
    </Container>
  );
}

