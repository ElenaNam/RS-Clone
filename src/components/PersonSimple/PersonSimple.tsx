import React, { useState, SyntheticEvent } from 'react';

import imgMother from '../../assets/images/personage/personage1.png';

import { useStyles } from './PersonSimple.style';

const Person = (props) => {
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