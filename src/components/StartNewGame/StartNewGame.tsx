import React, { useState, SyntheticEvent } from 'react';
import './StartNewGame.css';
import Radio from '@material-ui/core/Radio';
import { connect } from 'react-redux';
import { IProps } from './StartNewGame.models';

import { useStyles } from './StartNewGame.style';

import StartNextLevel from '../StartNextLevel/StartNextLevel';

import { hero, locations, buttons } from '../data/variables';

import girlImgSrc from '../../assets/images/girl.png';
import boyImgSrc from '../../assets/images/boy.png';

import { AppState, GameState, Gender, Lang } from '../../store/types';

import { startNewLevel, setUserName, setGender } from '../../store/actions/startNewGameAction';




export interface StartNewGameProps {
  lang: Lang;

  gender: Gender;
  userName: string;
  activeLevel: number;

  startNewLevel: () => void;

  setUserName: (userName: string) => void;

  setGender: (gender: Gender) => void;
}

const StartNewGame = ( props: StartNewGameProps ) => { // { userName, gender, lang, activeLevel }
  const { userName, gender, activeLevel, lang } = props;
  console.log( activeLevel, userName, lang);
  const classes = useStyles();

  // const lang = 'ru';

    
  const [count, setCount] = useState(0);

  const [newUserName, setNewUserName] = useState('');

  const [genderNew, setNewGender] = useState<Gender>('girl');

  // const handleGender = (e) => {
  //   // e.target.value && setGender(e.target.value);

  //   // setGender(e.target.value);
  // };

  let variant;
  let score = 10;
  if (score === 18) {variant = 'result3';}
  if (score < 12) {variant = 'result1';}
  if ((score > 12) && (score < 18)) {variant = 'result2';}
  score = 15;
  
  console.log(variant);

  const handleStartNewLevel = () => {
    props.setUserName(newUserName);
    props.setGender(genderNew);
    
    props.startNewLevel();
    // startNewLevel();
    // <StartNextLevel />;
  };

  return (
    // {classes.startNewGame}
    <div className="start-page">
      <div className="messages-wrapper">
        <div className="greeting-message">
          Привет! Я твой помощник в дороге.
          Меня зовут хз пока!
          А как твое имя?
        </div>
        <input
          // value={userName}
          maxLength={12}
          onChange={(e) => setNewUserName(e.target.value)}
        />
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
              // onChange={(e) => {
              //   if (typeof e.target.value === Gender) {

              //   }
              //   setNewGender(e.target.value)}
              // }
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
        <button type="button" onClick={handleStartNewLevel}>{buttons[2][lang]}</button>


        <div>{newUserName}</div>

      </div>



      <p>Вы нажали {count} раз</p>
      <button type="submit" onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
      {/* <StartNextLevel /> */}
    </div>
  );
};

// const mapStateToProps = (state: AppState) => ({
//   userName: state.userName,
//   gender: state.gender,
//   lang: state.lang,
//   activeLevel: state.activeLevel,
  
// });

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
  startNewLevel,
  setUserName,
  setGender,
};

export default connect(mapStateToProps, mapDispatchToProps)(StartNewGame);