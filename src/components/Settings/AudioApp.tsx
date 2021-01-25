import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

/* import soundfile from '../../assets/audio/gameover.mp3'; */
import VolumePage from './VolumePage';
import ForestSound from './ForestSound';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

export default function AudioApp() {
  const classes = useStyles();
  const [value, setValue] = useState<number>(30);

  const handleChange = (event: unknown, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <div className={classes.root}>
      <VolumePage />
      <ForestSound />
      <Typography id="continuous-slider" gutterBottom>
        Уровень громкости
      </Typography>
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
