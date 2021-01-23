import React, { useState, useEffect } from 'react';
import { PlayCircleFilled, PauseCircleFilled } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

/* import soundForest from '../../assets/audio/forest.mp3'; */

interface Props {
  handleClick(): void;
}

function Play(props: Props) {
  const { handleClick } = props;

  return (
    <Button onClick={() => handleClick()}>
      <PlayCircleFilled />
    </Button>
  );
}
function Pause(props: Props) {
  const { handleClick } = props;

  return (
    <Button onClick={() => handleClick()}>
      <PauseCircleFilled />
    </Button>
  );
}

const ForestSound = () => {
  /* const ref = React.createRef(); */
  const [play, setPlay] = useState(false);
  let audioForest: HTMLAudioElement | null = null;
  /*  let audioForest: HTMLAudioElement = useRef(null); */

  async function playAudio(): Promise<void> {
    if (audioForest !== null) {
      await audioForest.play().then((_) => {
        console.log('play');
      });
    }
  }
  async function pauseAudio(): Promise<void> {
    if (audioForest !== null) {
      await audioForest.pause();
    }
  }

  useEffect(() => {
    console.log(audioForest);
    if (audioForest !== null) {
      /* play ? audioForest.play() : audioForest.pause(); */
      if (play) {
        /* audioForest.play().then(null); */
        playAudio();
        console.log('play');
      } else {
        pauseAudio();
        /* audioForest.pause().then(null); */
        console.log('pause');
      }

      console.log(audioForest);
    }
  });

  return (
    <div style={{ display: 'flex', margin: 15 }}>
      <div>
        <Typography variant="h6">Звуки леса</Typography>
      </div>

      <div>
        <audio
          id="audio-forest"
          loop
          className="audio"
          ref={(audio) => {
            audioForest = audio;
          }}
        >
          <source src="../../assets/audio/forest.mp3" />
          <track kind="captions" />
          Ваш браузер не поддерживает воспроизведение аудио
        </audio>
        {/* {console.log(audioForest)} */}
        <div>
          {play ? (
            <Pause handleClick={() => setPlay(false)} />
          ) : (
            <Play handleClick={() => setPlay(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ForestSound;
