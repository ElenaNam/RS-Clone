import React, { useState, useRef, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { Pause, Play } from './SimpleBtn';
import sound from '../../../assets/audio/forest.mp3';

function ForestSound() {  
  const ref = useRef(new Audio(sound));

  let isPlay: boolean | null = null;
  const localPlay: string | null = window.localStorage.getItem('play?');
  if (localPlay) isPlay = true;

  const [play, setPlay] = useState<boolean | null>(isPlay);

  function playAudio() { 
    if (ref !== null && ref.current !== null) {
      setPlay(true);
      localStorage.setItem('play?', 'true');
      const localVolume: string | null = window.localStorage.getItem('volume');
      localVolume ? ref.current.volume = +(JSON.parse(localVolume)) 
        : ref.current.volume = .5;     
      ref.current.play();     
    }
  }
  function pauseAudio() {
    setPlay(false); 
    localStorage.setItem('play?', 'false');   
    ref.current.pause();
  }
  useEffect(() => {
    if (play){
      playAudio();
    }
  });
  

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
