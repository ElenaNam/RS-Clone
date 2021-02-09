import React from 'react';

import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container'; 
import { connect } from 'react-redux';
import { useStyles } from './Information.style';
import { textInformation } from '../data/textInformation';

import { AppState, GameState, Gender, Lang } from '../../store/types';


export interface InformationProps {
  lang?: Lang;
}


const Information = ( props: InformationProps ) => {
  const { lang = 'ru' } = props;
  // const lang = 'ru';

  const classes = useStyles();
  return (
    <Container maxWidth='sm' className={classes.root}>
      {textInformation.map((paragraph) => (
        <Typography 
          variant='body1' 
          key={paragraph.id}
          className={classes.text}
        >
          {paragraph[lang]}
        </Typography>
      ))}
    </Container>
  );
};


const mapStateToProps = (state: AppState) => ({
  lang: state.game.lang,
});

export default connect(mapStateToProps, null)(Information);
