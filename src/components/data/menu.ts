export interface Links {
  id: number;
  link: string;
  colorIcon: string;
  ru: string;
  en: string;
  de: string;
}

export const links: Array<Links> = [
  {
    id: 0,
    link: '/home',
    colorIcon: 'secondary',
    ru: 'Главная',
    en: 'Home',
    de: 'Startseite',
  },
  {
    id: 1,
    link: '/newgame',
    colorIcon: 'primary',
    ru: 'Новая игра',
    en: 'New Game',
    de: 'Neues Spiel',
  },
  {
    id: 2,
    ru: 'Продолжить',
    link: '/game',
    colorIcon: 'secondary',
    en: 'Continue',
    de: 'Weiterspielen',
  },
  {
    id: 3,
    link: '/manual',
    colorIcon: 'primary',
    ru: 'Инструкция',
    en: 'Manual',
    de: 'Anleitung',
  },
  {
    id: 4,
    link: '/settings',
    colorIcon: 'secondary',
    ru: 'Настройки',
    en: 'Settings',
    de: 'Einstellungen',
  },
/*   {
    id: 5,
    link: '/information',
    colorIcon: 'primary',
    ru: 'О разработчиках',
    en: 'About the developers',
    de: 'Über Entwickler',
  }, */
];
