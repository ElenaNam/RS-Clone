import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
/* import Container from '@material-ui/core/Container/Container'; */
/* import Typography from '@material-ui/core/Typography'; */
import { Box } from '@material-ui/core';
import VolumeOff from './VolumeOffBtn';
import VolumeOn from './VolumeOnBtn';


const useStyles = makeStyles(() => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
  },
}));

// включение и выключение звука в приложении
function VolumeApp() {
  const classes = useStyles();

  const mute = (elem: HTMLAudioElement, isVolume: boolean) => {
    const el = elem;
    el.muted = !isVolume;
    /* el.muted ? el.play() : el.pause(); */
    if (el.muted) {
      el.pause();
      localStorage.setItem('volume?', 'false');
    } else {
      el.play();
      localStorage.setItem('volume?', 'true');
      /* console.log('volumeApp play'); */
    }
  };
  // если в памяти ничего нет, то по умолчанию звук включен
  let valueVolume: boolean  = true;
  const localVolume: string | null = window.localStorage.getItem('volume?');
  if (localVolume) valueVolume = Boolean(JSON.parse(localVolume));

  const [volume, setVolume] = useState<boolean>(valueVolume);
  // вкл или выкл звук всем элементам при каждом рендере
  useEffect(() => {    
    /* console.log(volume); */
    document.querySelectorAll('audio').forEach((audio) => mute(audio, volume));       
  }, [volume]);

  return (
    <Box className={classes.main}>
      {/* <div className="first">
        <Typography variant="h6">Звук</Typography>
      </div> */}
      <div>
        {volume ? (
          <VolumeOff handleClick={() => setVolume(false)} />
        ) : (
          <VolumeOn handleClick={() => setVolume(true)} />
        )}
      </div>      
    </Box>
  );
}
export default VolumeApp;
