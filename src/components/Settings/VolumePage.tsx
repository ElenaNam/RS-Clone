import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container/Container';
import Typography from '@material-ui/core/Typography';
import VolumeOff from './VolumeOffBtn';
import VolumeOn from './VolumeOnBtn';

const useStyles = makeStyles(() => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function VolumePage() {
  const classes = useStyles();
  const mute = (elem: HTMLAudioElement, isVolume: boolean) => {
    const el = elem;
    el.muted = !isVolume;
    el.muted ? el.play() : el.pause();
  };

  const [volume, setVolume] = useState<boolean>(true);

  useEffect(() => {
    document.querySelectorAll('audio').forEach((audio) => mute(audio, volume));
  });

  return (
    <Container maxWidth="sm" className={classes.main}>
      <div className="first">
        <Typography variant="h6">Звук</Typography>
      </div>

      <div>
        <audio id="audio" loop className="audio">
          <source src="./forest.mp3" />
          <track kind="captions" />
          Ваш браузер не поддерживает воспроизведение аудио
        </audio>

        <div>
          {volume ? (
            <VolumeOff handleClick={() => setVolume(false)} />
          ) : (
            <VolumeOn handleClick={() => setVolume(true)} />
          )}
        </div>
      </div>
    </Container>
  );
}
export default VolumePage;
