import React from 'react';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import IconButton from '@material-ui/core/IconButton';
import green from '@material-ui/core/colors/green';

interface Props {
  handleClick(): void;
}

export default function VolumeOff(props: Props) {
  const { handleClick } = props;

  return (
    <IconButton style={{ color: green[900] }} onClick={() => handleClick()}>
      <VolumeUpIcon />
    </IconButton>
  );
}
