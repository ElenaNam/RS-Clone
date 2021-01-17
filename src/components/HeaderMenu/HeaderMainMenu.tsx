import React from 'react';
import './HeaderMainMenu.module.css';
import HeaderMenu from './HeaderMenu';
/* import HeaderMenu from './header-menu-pattern'; */

function HeaderMainMenu() {
  /*   const a: number = 5;
  let b = a + 1;
  b += 2; */
  return (
    <div className="header-block">
      <HeaderMenu />;
    </div>
  );
}

export default HeaderMainMenu;
