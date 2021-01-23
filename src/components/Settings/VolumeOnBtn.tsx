import React from 'react';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import { IconButton } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

interface Props {
  handleClick(): void;
}

export default function VolumeOn(props: Props) {
  const theme = useTheme();
  const { handleClick } = props;

  return (
    <IconButton className="player__button" onClick={() => handleClick()}>
      <VolumeOffIcon />
    </IconButton>
  );
}
