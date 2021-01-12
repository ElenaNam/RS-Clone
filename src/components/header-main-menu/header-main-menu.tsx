import React from 'react';
import './header-main-menu.css';
import HeaderMenu from './header-menu-pattern';

function HeaderMainMenu() {
  
  const a: number = 5;
  let b = a + 1;
  b += 2;
  return (
    <div className="header-block">
      Hello {b}
      <HeaderMenu />;
    </div>
  );
}

export default HeaderMainMenu;