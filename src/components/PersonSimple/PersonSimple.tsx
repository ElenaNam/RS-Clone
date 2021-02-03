import React, { useState, SyntheticEvent } from 'react';

import imgMother from '../../assets/images/personage/personage1.png';

import { useStyles } from './PersonSimple.style';

export interface PersonProps {
  // lang: 'en' | 'de' | 'ru';
  
  // onClose: (index: number) => void;

  img: string;
  // gender: string;
  // userName: string;
  // startNewLevel: () => void;
}

const Person = (props: PersonProps) => {
  const { img } = props;
  const a = 0;
  const classes = useStyles();
  return (

    <img src={img} alt="PersonageImg" className={classes.img} />
    // <div className={classes.pageWrapper}>
    //   <div className="page">

  //     Person
  //     <img src={imgMother} alt="PersonageImg" className={classes.img} />


  //   </div>
  // </div>
  );
};

export default Person;