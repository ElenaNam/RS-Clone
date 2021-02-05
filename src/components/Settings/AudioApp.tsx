import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import VolumeApp from './Volume/VolumeApp';
import ForestSound from './Simple/ForestSound';
import AudioSlider from './AudioSlider';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
   
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    
  },
});

export default function AudioApp(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.content}>
        <VolumeApp />      
        <AudioSlider />
      </Container>

      {/* <ForestSound /> */}
    </div>
  );
}
