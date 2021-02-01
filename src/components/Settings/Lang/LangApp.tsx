import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function LangApp() {
  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">labelPlacement</FormLabel> */}
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel value="Ру" control={<Radio color="primary" />} label="Ру" />
        <FormControlLabel value="En" control={<Radio color="primary" />} label="En" />
        <FormControlLabel value="De" control={<Radio color="primary" />} label="De" />
      </RadioGroup>
    </FormControl>
  );
}