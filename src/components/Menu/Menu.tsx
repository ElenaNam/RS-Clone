import React from 'react';

import HeaderMainMenu from '../HeaderMenu/HeaderMainMenu';
import MainLayout from '../MainLayout/MainLayout';


function Menu(): JSX.Element {
  return (  
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <HeaderMainMenu /> 
      <MainLayout />           
    </div> 
  );
} 

export default Menu;