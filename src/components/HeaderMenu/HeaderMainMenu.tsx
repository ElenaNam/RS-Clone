import React from 'react';
import './HeaderMainMenu.module.css';
import HeaderMenu from './HeadeMenu';

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
