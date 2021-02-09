import React, { useContext } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ThemeContext from './ThemeContext';


import { AppState, GameState, Gender, Lang } from '../../../store/types';
// import { titleArr } from '../data/textSettings';
import { nightMode } from '../../data/textSettings';

const useStyles = makeStyles((theme:Theme)=>({
  root: {
    width: 42,
    height: 22,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: 'Crimson',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: 'Coral',
      border: '6px solid black',
    },
  },
  checked: {},
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
}));

export interface ThemeTogglerProps {
  lang?: Lang;
}


const ThemeToggler = ( props: ThemeTogglerProps ) => {
  const { lang = 'ru' } = props;
  // const lang = 'ru';

  const context = useContext(ThemeContext);
  const classes = useStyles();

  return (
    <FormControlLabel      
      label={nightMode[lang]}
      style={{ marginLeft: 5, marginRight: 5 }}
      control={
        <Switch
          classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            checked: classes.checked,
            track: classes.track
          }}
          checked={context.darkMode}
          onChange={() => context.onSetDarkMode(!context.darkMode)}          
        />
      }      
    />
  );
};

const mapStateToProps = (state: AppState) => ({
  lang: state.game.lang,
});

export default connect(mapStateToProps, null)(ThemeToggler);