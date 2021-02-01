/* import { string } from 'yargs'; */

export interface Player {
  ru: string;
  lat: string;
}

export const namePlayer: Player = {
  ru: '',
  lat: '' /* ????? */,
};

export interface Lang {
  ru: string;
  en: string;
  de: string;
}

export const hero: Lang[] = [
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

export const locations: Lang[] = [
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

export const assistant: object = {}; // помощник, который появляется после каждого ответа и объясняет ответ

export interface Btn {
  id: number;
  ru: string;
  en: string;
  de: string;
}

export const buttons: Btn[] = [
  {
    id: 0,
    ru: 'НАЧАТЬ ИГРУ',
    en: 'START GAME',
    de: 'SPIEL STARTEN',
  },
  {
    id: 1,
    ru: 'ИНСТРУКЦИЯ',
    en: 'MANUAL',
    de: 'ANLEITUNG',
  },
  {
    id: 2,
    ru: 'ДАЛЕЕ',
    en: 'FURTHER' /* ? */,
    de: 'LEITER',
  },
  {
    id: 3,
    ru: 'НАЧАТЬ ЗАНОВО',
    en: 'START OVER',
    de: 'NEU STARTEN',
  },
];
