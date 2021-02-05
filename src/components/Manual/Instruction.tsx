import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { useStyles } from './Manual.style';
import CardManual from './CardManual';
import gin from '../../assets/images/gin_success.png';
import task from '../../assets/images/personage/personage0.png';
import loc from '../../assets/images/additional/all_locations.jpg';
import und from '../../assets/images/additional/und.png';
import heros from '../../assets/images/additional/heros.png';
import score from '../../assets/images/additional/score.png';
import { titleArr, textArr } from '../data/textManual';

import { AppState, GameState, Gender, Lang } from '../../store/types';


export interface InstructionProps {
  lang?: Lang;
}


const Instruction = ( props: InstructionProps ) => {
  const { lang = 'ru' } = props;
  // const lang = 'ru';

  const classes = useStyles();
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
      <Grid container style={{ justifyContent: 'space-around' }}>

        <Grid 
          item 
          xs={12} 
          sm={12} 
          md={12} 
          lg={12} 
          className={classes.card}
        >
          <Paper elevation={5}>            
            <Typography variant='h6' className={classes.text}>
              {titleArr[0][lang]}
            </Typography>             
          </Paper> 
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardManual number="1" text={textArr[0][lang]} img={heros}  /> 
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardManual number="2" text={textArr[1][lang]} img={gin} /> 
        </Grid>          
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardManual number="3" text={textArr[2][lang]} img={task} /> 
        </Grid> 

        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.card}>
          <Paper elevation={5}>            
            <Typography variant='h6' className={classes.text}>
              {titleArr[1][lang]}
            </Typography>             
          </Paper> 
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardManual number="4" text={textArr[3][lang]} img={loc} /> 
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardManual number="5" text={textArr[4][lang]} img={und}  /> 
        </Grid>          
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardManual number="6" text={textArr[5][lang]} img={score} /> 
        </Grid> 

      </Grid>
    </div>
  );
};


const mapStateToProps = (state: AppState) => ({
  lang: state.game.lang,
});

export default connect(mapStateToProps, null)(Instruction);
