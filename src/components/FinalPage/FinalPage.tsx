import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Paper, Typography, makeStyles, Box, Button } from '@material-ui/core';
import { personage } from '../data/personage'; 
import { Grandma, buttons } from '../data/variables';
import { rules, finalPhrase } from '../data/finish';

import grandma from '../../assets/images/personage/personage10.png';
import gin from '../../assets/images/gin_success.png';


const useStyles = makeStyles(() => ({  
  root: {
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
  },
  content: {   
    alignSelf: 'flex-start',
    marginTop: '10px',
    paddingBottom: '5px',
    background: 'linear-gradient(45deg, Peru 30%, SaddleBrown 80%)',    
  },
  paper: {
    /* background: 'linear-gradient(45deg, Moccasin 10%, BurlyWood 90%)', */    
  },
  text: {
    margin: 5,
  },
  text2: {
    margin: '5px 5px 15px 5px',
  },
}));

export default function FinalPage(): JSX.Element {
  const classes = useStyles();

  const lang = 'ru';
  const score: number = 15;
  let variant: string = '';

  if (score < 12) variant = 'result1?';
  if (score >= 12 && score < 18) variant = 'result2?';
  if (score === 18) variant = 'result3?';

  return ( 
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>

        <Grid item xs={6} sm={6} lg={9} className={classes.content}>
          <Paper elevation={5}>            
            <Typography variant='body1' className={classes.text2}>
              5 баллов
            </Typography>             
          </Paper> 
        </Grid>

        <Grid item xs={12} sm={8} lg={4} className={classes.content}>
          <Paper elevation={5} className={classes.paper}>
            <Typography className={classes.text}>

              {personage[10].result1?.ru.text} 

            </Typography>
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
        variant="contained" 
        color="primary" 
        component={NavLink} 
        to='/home'
      >
        {buttons[3][lang]}
      </Button>
      
    </div>      
  );  
}
