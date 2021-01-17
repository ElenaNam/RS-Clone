import { string } from 'yargs';

export const namePlayer = {
  ru: string,
  lat: string /* ????? */,
};

export const hero = [
  {
    ru: 'Мальчик',
    en: 'Boy',
    de: 'Junge',
  },
  {
    ru: 'Девочка',
    en: 'Girl',
    de: 'Mädchen',
  },
];

export const locations = [
  {
    ru: 'ГОРОД',
    en: 'CITY',
    de: 'STADT',
  },
  {
    ru: 'ЛЕС',
    en: 'FOREST',
    de: 'WALD',
  },
  {
    ru: 'ДЕРЕВНЯ',
    en: 'VILLAGE',
    de: 'DORF',
  },
];

export const assistant = ''; //помощник, который появляется после каждого ответа и объясняет ответ

export const buttons = [
  {
    id: '0',
    ru: 'НАЧАТЬ ИГРУ',
    en: 'START GAME',
    de: 'SPIEL STARTEN',
  },
  {
    id: '1',
    ru: 'ИНСТРУКЦИЯ',
    en: 'MANUAL',
    de: 'ANLEITUNG',
  },
  {
    id: '2',
    ru: 'ДАЛЕЕ',
    en: 'FURTHER' /* ? */,
    de: 'LEITER',
  },
];
