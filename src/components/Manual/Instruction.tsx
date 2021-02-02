import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import CardManual from './CardManual';
import gin from '../../assets/images/gin_success.png';
import task from '../../assets/images/personage/personage0.png';
import loc from '../../assets/images/additional/all_locations.jpg';
import und from '../../assets/images/additional/und.png';
import heros from '../../assets/images/additional/heros.png';
import score from '../../assets/images/additional/score.png';



export default function Instruction() {
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
      <Grid container style={{ justifyContent: 'space-around' }}>

        <Grid 
          item 
          xs={12} 
          sm={12} 
          md={12} 
          lg={12} 
          style={{ marginTop: 30 }}
        >
          <Paper elevation={5}>            
            <Typography variant='h6'>
              Чтобы отправиться в путешествие, нужно подготовиться!
            </Typography>             
          </Paper> 
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardManual number="1" text='Выбери героя' img={heros}  /> 
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardManual number="2" text='Познакомься с помощником' img={gin} /> 
        </Grid>          
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardManual number="3" text='Получи задание' img={task} /> 
        </Grid> 

        <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginTop: 30 }}>
          <Paper elevation={5}>            
            <Typography variant='h6'>
              Теперь можно отправляться в путь!
            </Typography>             
          </Paper> 
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardManual number="4" text='Пройди Город, Лес и Деревню' img={loc} /> 
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardManual number="5" text='Общайся со встречными людьми' img={und}  /> 
        </Grid>          
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardManual number="6" text='Выбирай ответ и получай баллы' img={score} /> 
        </Grid> 

      </Grid>
    </div>
  );
}
