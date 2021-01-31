import React, { useContext } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ThemeContext from './ThemeContext';

const ThemeToggler = () => {
  const context = useContext(ThemeContext);

  return (
    <FormControlLabel
      label='Ночной режим'
      control={
        <Switch
          checked={context.darkMode}
          onChange={() => context.onSetDarkMode(!context.darkMode)}          
        />
      }      
    />
  );
};

export default ThemeToggler;