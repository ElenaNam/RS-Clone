import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Paper, Typography, makeStyles, Box, Button } from '@material-ui/core';
import { personage } from '../data/personage'; 
import { Grandma, buttons } from '../data/variables';
import { rules, finalPhrase } from '../data/finish';

import grandma from '../../assets/images/personage/personage10.png';
import gin from '../../assets/images/gin_success.png';
import smile from '../../assets/images/smile.png';


const useStyles = makeStyles((theme) => ({  
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

        <Grid item xs={6} sm={6} lg={9} className={classes.score}>
          <Paper elevation={5}>   
            <Box
              style={{ color: '#0D0D0D', display: 'inline' }}            
              fontFamily="h6.fontFamily"
              fontSize={{ xs: 12, sm: 14, md: 16 }}
              p={{ xs: 1, sm: 1, md: 1, lg: 1 }}
            >
              5
            </Box>  
            <Box style={{ display: 'inline', verticalAlign: 'text-top' }}>
              <img src={smile} alt='smile' width='15px' />
            </Box>     
            {/*     <Typography variant='body1' className={classes.text2}>
              5 
            </Typography> */}             
          </Paper> 
        </Grid>

        <Grid item xs={12} sm={8} lg={4} className={classes.content}>
          <Paper elevation={5} className={classes.paper}>
            <Box
              style={{ color: '#0D0D0D', display: 'inline' }}            
              fontFamily="h6.fontFamily"
              fontSize={{ xs: 12, sm: 14, md: 16 }}
              p={{ xs: 1, sm: 1, md: 1, lg: 1 }}
            >
              {personage[10].result1?.ru.text} 
            </Box> 


            {/* <Typography className={classes.text}>
              {personage[10].result1?.ru.text}
            </Typography> */}
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