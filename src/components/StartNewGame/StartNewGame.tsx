import React, { useState, SyntheticEvent } from 'react';
// import './StartNewGame.css';
import { Box, Button, Container, Paper } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { IProps } from './StartNewGame.models';

import { useStyles } from './StartNewGame.style';

import StartNextLevel from '../StartNextLevel/StartNextLevel';

import { hero, locations, buttons } from '../data/variables';

import girlImgSrc from '../../assets/images/girl.png';
import boyImgSrc from '../../assets/images/boy.png';
import gin from '../../assets/images/gin_success.png';

import { AppState, GameState, Gender, Lang } from '../../store/types';

import { startNewLevel, setUserName, setGender } from '../../store/actions/startNewGameAction';

import { text1, text2 } from '../data/textNewGame';





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
    <Container maxWidth='sm' className={classes.startPage}>
      <Paper elevation={5} className={classes.paper}>
        <Box className={classes.messagesWrapper}>
          <Box className={classes.gin}>
            <img src={gin} alt={gin} width='100%' />
          </Box>
          <Paper elevation={5} className={classes.paperInner}>
            <Box 
              fontSize={{ xs: 15, sm: 18, md: 25 }}
              p={{ xs: 1, sm: 1, md: 2, lg: 2 }} 
              className={classes.greetingMessage}
            >            
              {text1[lang]}                        
            </Box>
          </Paper>
          {/* <input
            // value={userName}
            maxLength={12}
            onChange={(e) => setNewUserName(e.target.value)}
          /> */}

          <form noValidate autoComplete="off">
            <Input 
              autoFocus={true}
              placeholder=""             
              inputProps={{ 'aria-label': 'description', maxLength: 12, size: 15 }}
              onChange={(e) => setNewUserName(e.target.value)} 
            />
          </form>

          <div className={classes.greetingMessage}>
            <Box 
              fontWeight={600}
              fontSize={{ xs: 14, sm: 18, md: 25, lg: 25 }}
              p={{ xs: 1, sm: 1, md: 2, lg: 2 }} 
              className={classes.greetingMessage}
            >            
              {text2[lang]}                        
            </Box>
          </div>

          <div className={classes.maleChoice}>

            <div className={classes.genderItem}>
              <Radio
                value="girl"
                checked={genderNew==='girl'}
                // onChange={handleGender}
                onChange={(e) => setNewGender(e.target.value as Gender)}
              />
              <img src={girlImgSrc} alt="girl" className={classes.imgUser} />
            </div>

            <div className={classes.genderItem}>
              <Radio
                value="boy"
                checked={genderNew==='boy'}
                // onChange={handleGender}
                onChange={(e) => setNewGender(e.target.value as Gender)}
              />
              <img src={boyImgSrc} alt="boy" className={classes.imgUser} />
            </div>
          </div>

          <Button           
            variant="contained" 
            color="secondary"
            /* component={NavLink} */ 
            /* to='/home' */
            onClick={handleStartNewLevel}
          >
            {buttons[2][lang]}
          </Button>


          <div style={{ display: 'none' }}>{newUserName}</div>

        </Box>
        {/* <StartNextLevel /> */}
      </Paper>

    </Container>
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