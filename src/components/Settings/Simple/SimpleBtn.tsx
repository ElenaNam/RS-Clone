import React from 'react';
import { PlayCircleFilled, PauseCircleFilled } from '@material-ui/icons';
import { Button } from '@material-ui/core';

/* import soundForest from '../../assets/audio/forest.mp3'; */

interface Props {
  handleClick(): void;
}

export function Play(props: Props) {
  const { handleClick } = props;

  return (
    <Button onClick={() => handleClick()}>
      <PlayCircleFilled />
    </Button>
  );
}
export function Pause(props: Props) {
  const { handleClick } = props;

  return (
    <Button onClick={() => handleClick()}>
      <PauseCircleFilled />
    </Button>
  );
}
