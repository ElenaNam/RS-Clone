import React from 'react';
import { NavLink } from 'react-router-dom';

import { Box, Button, Container, Grid, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { buttons } from '../data/variables';
import { text } from '../data/textHome';



import { AppState, Lang } from '../../store/types';
import { setLanguage, startNewLevel } from '../../store/actions/startNewGameAction';
/* import FormLabel from '@material-ui/core/FormLabel'; */
import { useStyles } from './Home.style';

export interface HomeProps {
  lang: Lang;

  startNewLevel: () => void;
}

const Home = (props: HomeProps) => {
  const classes = useStyles();
  const { lang } = props;
  const handleClickStartNewGame = () => {
    props.startNewLevel();
  };
  // const lang = 'ru';
  return (
    <Container maxWidth='md' className={classes.root}>
      <Box className={classes.content}>
        <Paper elevation={5} className={classes.paper}>
          {text.map((p) => (            

            <Typography key={p.id} variant='h6' className={classes.text}>
              {p[lang]} 
            </Typography> 
          ))}
        </Paper> 
      </Box>

      <Button 
        onClick={handleClickStartNewGame}
        variant="contained" 
        color="secondary" 
        // component={NavLink} 
        // to='/newgame'
      >
        {buttons[0][lang]}
      </Button>
    </Container>

  );
};

const mapStateToProps = (state: AppState) => ({
  lang: state.game.lang,
});

const mapDispatchToProps = {
  startNewLevel,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
