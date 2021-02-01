import React from 'react';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import IconButton from '@material-ui/core/IconButton';

interface Props {
  handleClick(): void;
}

export default function VolumeOff(props: Props) {
  const { handleClick } = props;

  return (
    <IconButton style={{ color: 'Crimson' }} onClick={() => handleClick()}>
      <VolumeUpIcon fontSize="large" />
    </IconButton>
  );
}
