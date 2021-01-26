import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';


const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

export default function AudioSlider(): JSX.Element {
  const classes = useStyles();
  let valVolume: number = 50;
  const local: string | null = window.localStorage.getItem('volume');
  if (local) valVolume = +(JSON.parse(local)) * 100;
  const [value, setValue] = useState<number>(valVolume);
  
  const selectVolume = ({ elem, volume }: 
  { elem: HTMLCollectionOf<HTMLAudioElement>; volume: number; }) => {    
    Array.from(elem).map((el: HTMLAudioElement) => {
      const item = el;
      item.volume = volume;
    });   
  };
  
  const handleChange = (event: unknown, newValue: number | number[]) => {
    setValue(newValue as number);
    const volume = (newValue as number)/100;
    const audioElements = document.getElementsByTagName('audio'); 
    selectVolume({ elem: audioElements, volume });   
    window.localStorage.setItem('volume', volume.toString());
  };

  return (
    <div className={classes.root}>   
      {/* <Typography id="continuous-slider" gutterBottom>
        Уровень громкости
      </Typography> */}
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
}