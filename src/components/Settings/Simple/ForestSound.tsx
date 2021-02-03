/* eslint-disable no-console */
import React, { useState, useRef, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Pause, Play } from './SimpleBtn';
import sound from '../../../assets/audio/forest.mp3';

function ForestSound() {  
  const ref = useRef(new Audio(sound));

  let isPlay: boolean | null = false;
  const localPlay: string | null = window.localStorage.getItem('play?');
  if (localPlay) isPlay = Boolean(JSON.parse(localPlay));

  const [play, setPlay] = useState<boolean | null>(() => null);

  function playAudio() {     
    if (ref !== null && ref.current !== null) {
      setPlay(true);
      console.log('forestSound play');
      localStorage.setItem('play?', 'true');

      // громкость
      const localVolume: string | null = window.localStorage.getItem('volume');

      localVolume ? ref.current.volume = +(JSON.parse(localVolume)) 
        : ref.current.volume = .5;   
      console.log(ref.current);  
      ref.current.play();     
    }
  }
  function pauseAudio() {
    setPlay(false); 
    localStorage.setItem('play?', 'false');   
    ref.current.pause();
  }
  /* useEffect(() => {
    if (play){
      playAudio();
    }
  }); */
  

  return (
    <div style={{ display: 'flex', margin: 10, justifyContent: 'center' }}>      
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
          {play && typeof(play) === 'boolean' ? (
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
