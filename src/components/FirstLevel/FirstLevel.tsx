import React, { useState, SyntheticEvent } from 'react';
// import './StartNewGame.css';
import Radio from '@material-ui/core/Radio';
import { connect } from 'react-redux';
// import { IProps } from './StartNewGame.models';

// import { useStyles } from './StartNewGame.style';

import StartNextLevel from '../StartNextLevel/StartNextLevel';

import { hero, locations, buttons } from '../data/variables';

import girlImgSrc from '../../assets/images/girl.png';

import { AppState } from '../../store/types';

import { startNewLevel } from '../../store/actions/startNewGameAction';

const StartNewGame = (props) => {
  const { userName, gender } = props;
  // const classes = useStyles();

  const lang = 'ru';

    
  const [count, setCount] = useState(0);

  // const [userName, setUserName] = useState('');

  // const [gender, setGender] = useState('male');

  const handleGender = (e) => {
    // e.target.value && setGender(e.target.value);

    // setGender(e.target.value);
  };

  const handleStartNewLevel = () => {
    props.startNewLevel();
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
          value={userName}
          maxLength={12}
          // onChange={(e) => setUserName(e.target.value)}
        />
        <div className="greeting-message">
          Выбери героя
        </div>
        <div className="male-choice">
          <div className="gender-item">
            <Radio
              value="girl"
              checked={gender==='girl'}
              onChange={handleGender}
            />
            <img src={girlImgSrc} alt="girl" className="img-user" />
          </div>
          <div className="gender-item">
            <Radio
              value="boy"
              checked={gender==='boy'}
              onChange={handleGender}
            />
            <img src={girlImgSrc} alt="boy" className="img-user" />
          </div>
        </div>
        <button type="button" onClick={handleStartNewLevel}>{buttons[2][lang]}</button>


        <div>{userName}</div>

      </div>



      <p>Вы нажали {count} раз</p>
      <button type="submit" onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  userName: state.userName,
  gender: state.gender,
});

const mapDispatchToProps = {
  startNewLevel,
};

export default connect(mapStateToProps, mapDispatchToProps)(StartNewGame);