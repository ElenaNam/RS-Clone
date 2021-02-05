import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux';

import { AppState, Lang } from '../../../store/types';
import {
  setLanguage
} from '../../../store/actions/startNewGameAction';
/* import FormLabel from '@material-ui/core/FormLabel'; */

export interface LangAppProps {
  lang: Lang;
  setLanguage: (lang: Lang) => void;
}

const LangApp = (props: LangAppProps) => {
  const { lang } = props;
  const handleClickLang = (item: Lang) => {
    props.setLanguage(item);
  };
  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="position" name="position" value={lang}>
        <FormControlLabel
          onChange={(e) => {handleClickLang('ru');}}
          value="ru"
          control={<Radio color="primary" />}
          label="Ру"
        />
        <FormControlLabel
          onChange={() => {handleClickLang('en');}}
          value="en"
          control={<Radio color="primary" />}
          label="En"
        />
        <FormControlLabel
          onChange={() => {handleClickLang('de');}}
          value="de"
          control={<Radio color="primary" />}
          label="De"
        />
      </RadioGroup>
    </FormControl>
  );
};

const mapStateToProps = (state: AppState) => ({
  lang: state.game.lang,
});

const mapDispatchToProps = {
  setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(LangApp);
