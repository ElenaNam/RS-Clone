import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Theme, Typography } from '@material-ui/core';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';

const useStyles = makeStyles((theme:Theme)=>({
  root: {
    flexGrow: 1,
    maxWidth: 250,
  },
  titleCard: {  
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',  
    background: 'linear-gradient(45deg, #CD853F 30%, #8B4513 90%)',
    minHeight: 30, 
    marginBottom: 7,
  },
  title: {
    display: 'flex',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  body: {  
    display: 'flex',
    justifyContent: 'center',
    verticalAlign: 'center',
    minHeight: 50, 
    background: 'linear-gradient(45deg, #F4A460 30%, #D2691E 90%)',
    
  }
}));

export interface CardProps  { 
  title: string  
  children: React.ReactNode  
}

export default function SettingsCard(props: CardProps): JSX.Element {
  const classes = useStyles();
  const { title, children } = props;
  return (
    <Grid container spacing={1}>
      <Container>
        <Paper className={classes.titleCard} elevation={5}> 
          <EmojiFlagsIcon />
          <Typography variant='h6' className={classes.title}>{title}</Typography>
          <EmojiFlagsIcon />
        </Paper>
      </Container>      
      <Container>
        <Paper className={classes.body} elevation={3}> 
          {children}  
        </Paper>
      </Container>      
    </Grid>
  );
}
