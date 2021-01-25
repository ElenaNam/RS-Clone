import React, { useState, useEffect, useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import { Pause, Play } from './SimpleBtn';
import sound from '../../assets/audio/forest.mp3';

function ForestSound() {
  /* let ref = useRef(); */
  const ref = useRef(new Audio(sound));
  const [play, setPlay] = useState<boolean | null>(null);
  /* const [play, setPlay] = useState(false); */
  /* const audioForest: HTMLAudioElement | null = null; */
  /*  let audioForest: HTMLAudioElement = useRef(null); */

  /* const audioForest = React.createRef(); */

  /*   function playAudio() {
    if (audioForest !== null) {
      console.log(audioForest);
      audioForest.play();
    }
  }
  function pauseAudio() {
    if (audioForest !== null) {
      console.log(audioForest);
      audioForest.pause();
    }
  } */
  function playAudio() {
    /* setPlay(true); */
    if (ref !== null && ref.current !== null) {
      setPlay(true);
      /* new Audio(sound).play(); */
      /*  new Audio(sound).play().then(() => setPlay(true)); */
      ref.current.play();
      console.log('play');
      console.log(play);
      /* ref.current.play().then(() => setPlay(true)); */
      console.log(ref.current);
    }
  }
  function pauseAudio() {
    setPlay(false);
    /* new Audio(sound).pause(); */
    ref.current.pause();
    /* setPlay(false); */
    console.log('pause');
    console.log(ref);
    /* ref.current.pause(); */
    console.log(ref.current);
  }
  useEffect(() => {
    if (play) {
      console.log('useEffect');
      console.log(ref.current);
    }
  });

  /*  useEffect(() => { */
  /* console.log(audioForest); */
  /* if (audioForest !== null) { */
  /* play ? audioForest.play() : audioForest.pause(); */
  /*     if (play) {
      playAudio();
      console.log('play');
    } else {
      pauseAudio();
      console.log('pause');
    } */
  /* console.log(audioForest); */
  /* } */
  /*   }, [play]); */

  return (
    <div style={{ display: 'flex', margin: 15 }}>
      <div>
        <Typography variant="h6">Звуки леса</Typography>
      </div>

      <div>
        <audio id="audio-forest" loop className="audio" ref={ref}>
          <source src={sound} />
          <track kind="captions" />
          Ваш браузер не поддерживает воспроизведение аудио
        </audio>

        <div>
          {play ? (
            <Pause handleClick={() => pauseAudio()} />
          ) : (
            <Play handleClick={() => playAudio()} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ForestSound;
