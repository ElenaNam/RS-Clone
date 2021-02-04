import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Paper, Typography, makeStyles, Box, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { personage, personageGranny } from '../data/personage'; 
import { Grandma, buttons } from '../data/variables';
import { rules, finalPhrase } from '../data/finish';

import grandma from '../../assets/images/personage/personage10.png';
import gin from '../../assets/images/gin_success.png';
import smile from '../../assets/images/smile.png'; 
import { AppState, Lang } from '../../store/types';
import { startNewLevel, restartGame } from '../../store/actions/startNewGameAction';



const useStyles = makeStyles((theme) => ({  
  root: {
    marginTop: '130px',
    flexGrow: 1,
    justifyContent: 'space-around',
    /* overflow: 'hidden', */
  },
  img1: {
    height: 'auto',
    width: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',    
  },
  container: {
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  content: {   
    alignSelf: 'flex-start',
    margin: 10,
    paddingBottom: '5px',
    background: 'linear-gradient(45deg, Peru 30%, SaddleBrown 80%)',    
  },
  paper: {
    /* background: 'linear-gradient(45deg, Moccasin 10%, BurlyWood 90%)', */    
  },
  score: {    
    margin: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    background: 'linear-gradient(45deg, Peru 30%, SaddleBrown 80%)',  
  },
  text: {
    margin: 5,
  },
  text2: {
    margin: '5px 5px 15px 5px',
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
}));

export interface FinalPageProps {
  // lang: 'en' | 'de' | 'ru';

  // onClose: (index: number) => void;
  gender: string;
  userName: string;
  lang: Lang;

  scoreGame: number;

  restartGame: () => void;

  // imgs: string[];
  // personageNums: number[];
  // backgoundImg: string;
}

const FinalPage = (props: FinalPageProps) => {
  const classes = useStyles();
  const { userName, gender, scoreGame, lang } = props;

  // const lang = 'ru';
  const score: number = 15;
  let variant: 'result1' | 'result2' | 'result3' = 'result3';

  if (scoreGame < 12) {
    variant = 'result1';
  }
  if (scoreGame >= 12 && scoreGame < 18) {
    variant = 'result2';
  }
  if (scoreGame === 18) {
    variant = 'result3';
  }

  const handleClickRestart = () => {
    // setOpen(true);
    props.restartGame();
  };

  return ( 
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>

        <Grid item xs={6} sm={6} lg={9} className={classes.content}>
          <Paper elevation={5}>            
            <Typography variant='body1' className={classes.text2}>
              {scoreGame} баллов
            </Typography>             
          </Paper> 
        </Grid>

        <Grid item xs={12} sm={8} lg={4} className={classes.content}>
          <Paper elevation={5} className={classes.paper}>
            {/* <Typography className={classes.text}>

              {personageGranny[variant][lang].text} 

            </Typography> */}
            <Box>
              {personageGranny[variant][lang].text.replaceAll('{namePlayer}', userName)} 
            </Box> 
          </Paper> 
        </Grid>

        <Grid item xs={12} sm={4} lg={2}>
          <Box>
            <img src={grandma} alt='grandma' style={{ height: 250 }} />
          </Box> 
        </Grid>

        <Grid item xs={12} sm={12} lg={6} className={classes.content}>
          <Paper elevation={5} className={classes.paper}>
            {rules.map((rule) => (              

              <Typography key={rule.id} variant='body1' className={classes.text2}>
                {rule[lang]} 
              </Typography> 
            ))}
          </Paper> 
        </Grid>

        <Grid item xs={12} sm={4} lg={2}>
          <Box>
            <img src={gin} alt='gin' style={{ height: 250 }} />
          </Box> 
        </Grid>

        <Grid item xs={12} sm={6} lg={3} className={classes.content}>
          <Paper elevation={5} className={classes.paper}>            
            <Typography variant='body1' className={classes.text2}>
              {finalPhrase[lang]} 
            </Typography>             
          </Paper> 
        </Grid>
      </Grid>

      <Button
        // onclick={handleClickRestart}
        onClick={() => { handleClickRestart(); }}
        variant="contained" 
        color="primary"
        // onclick={handleClickRestart}
        component={NavLink} 
        to='/home'
      >
        {buttons[3][lang]}
      </Button>
      
    </div>      
  );  
};


const mapStateToProps = (state: AppState) => ({
  userName: state.game.userName,
  gender: state.game.gender,
  scoreGame: state.game.scoreGame,
  lang: state.game.lang,
});

const mapDispatchToProps = {
  restartGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(FinalPage);
