import React, { useEffect } from 'react';
import darkstyles from './darkstyles';

export default function Layout(props): JSX.Element {
  useEffect(() => {
    if (window.localStorage !== null) {
      window.localStorage.getItem('theme') === 'dark'
        ? switchDarkTheme()
        : window.localStorage.setItem('theme', 'light');
    }
  });

  const switchDarkTheme = () => {
    window.localStorage.setItem('theme', 'dark');
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.innerHTML = darkstyles;
  };

  return <> {props.children} </>;
}
