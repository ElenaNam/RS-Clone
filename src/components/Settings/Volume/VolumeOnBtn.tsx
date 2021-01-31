import React from 'react';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import { IconButton } from '@material-ui/core';

interface Props {
  handleClick(): void;
}

export default function VolumeOn(props: Props) { 
  const { handleClick } = props;

  return (
    <IconButton onClick={() => handleClick()}>
      <VolumeOffIcon />
    </IconButton>
  );
}
