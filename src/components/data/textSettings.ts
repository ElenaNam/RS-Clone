export interface Blocks {
  id: number;
  ru: string;
  en: string;
  de: string;
}

export const titleArr: Array<Blocks> = [
  {
    id: 0,
    ru: 'Тема',
    en: 'Theme',
    de: 'Thema',
  },
  {
    id: 1,
    ru: 'Звук',
    en: 'Sound',
    de: 'Ton',
  },
  {
    id: 2,
    ru: 'Язык',
    en: 'Language',
    de: 'Sprache',
  },
  /* {
    id: 3,
    ru: 'Горячие клавиши',
    en: 'Hotkeys',
    de: 'Schnelltaste',
  }, */
  // {
  //   id: 4,
  //   ru: 'Ночной режим',
  //   en: 'night mode',
  //   de: 'nacht-modus',
  // },
];

export const nightMode: Blocks = {
  id: 4,
  ru: 'Ночной режим',
  en: 'Night mode',
  de: 'Nacht-modus',
};