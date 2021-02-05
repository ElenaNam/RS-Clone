import React, { useState, SyntheticEvent } from 'react';
import './StartNewGame.css';
import Radio from '@material-ui/core/Radio';
import { connect } from 'react-redux';
// import { IProps } from './StartNewGame.models';

// import { useStyles } from './StartNewGame.style';

import StartNextLevel from '../StartNextLevel/StartNextLevel';

import { hero, locations, buttons } from '../data/variables';

import girlImgSrc from '../../assets/images/girl.png';
import boyImgSrc from '../../assets/images/boy.png';

import { AppState, GameState, Gender, Lang } from '../../store/types';

import { startNewLevel, setUserName, setGender } from '../../store/actions/startNewGameAction';

import FinalPage from '../FinalPage/FinalPage';



export interface StartNewGameProps {
  lang: Lang;

  gender: Gender;
  userName: string;
  activeLevel: number;

  setLanguage: (lang: Lang) => void;

  setGender: (gender: Gender) => void;
}

const StartNewGame = ( props: StartNewGameProps ) => { // { userName, gender, lang, activeLevel }
  const { userName, gender, activeLevel, lang } = props;
  // const classes = useStyles();

  const [genderNew, setNewGender] = useState<Gender>('girl');

  const [langNew, setNewLang] = useState<Lang>('ru');

  const handleSetLanguage = () => {
    props.setGender(genderNew);

    props.setLanguage(lang);
  };

  return (
    // {classes.startNewGame}
    <FinalPage />
  );
};
/*   return (
    // {classes.startNewGame}
    <div className="start-page">
      <div className="messages-wrapper">
        <div className="greeting-message">
          Выбери героя
        </div>
        <div className="male-choice">
          <div className="gender-item">
            <Radio
              value="girl"
              checked={genderNew==='girl'}
              // onChange={handleGender}
              onChange={(e) => setNewGender(e.target.value as Gender)}
              
            />
            <img src={girlImgSrc} alt="girl" className="img-user" />
          </div>
          <div className="gender-item">
            <Radio
              value="boy"
              checked={genderNew==='boy'}
              // onChange={handleGender}
              onChange={(e) => setNewGender(e.target.value as Gender)}
            />
            <img src={boyImgSrc} alt="boy" className="img-user" />
          </div>
        </div>
        <button type="button" onClick={handleSetLanguage}>{buttons[2][lang]}</button>

      </div>
    </div>
  );
}; */


const mapStateToProps = (state: AppState) => {
  console.log(state);
  return {
    userName: state.game.userName,
    gender: state.game.gender,
    lang: state.game.lang,
    activeLevel: state.game.activeLevel,
  };
};

const mapDispatchToProps = {
  setGender,
  // setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(StartNewGame);