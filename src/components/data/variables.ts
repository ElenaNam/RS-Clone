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


export const Grandma: object[] = [
  {
    result1: { // плохой результат 0-11 баллов
      ru: {
        name: 'Бабушка',
        text: 'Здравствуй, {namePlayer}! Слишком долго я тебя ждала... Пришлось просить о помощи соседей. Тебе нужно хорошо выучить правила самостоятельного путешествия!',
      },
      en: {
        name: 'Grandma',
        text: "Hello, {namePlayer}!I've waited too long for you... I had to ask the neighbors for help. You need to learn the rules of independent travel well!",
      },
      de: {
        name: 'Großmutter',
        text: 'Hallo, {namePlayer}!Ich habe zu lange auf dich gewartet... Ich musste um Hilfe von Nachbarn bitten. Sie müssen die Regeln der selbständigen Reise gut lernen!',
      },
    },
  },
  {
    result2: { // хороший результат 12-17 баллов
      ru: {
        name: 'Бабушка',
        text: 'Здравствуй, {namePlayer}! Как же долго я тебя ждала! Думала уж совсем разболеюсь… Но хорошо, что лекарство наконец здесь… Как дорога? Хорошо ли теперь знаешь правила самостоятельного путешествия?',
      },
      en: {
        name: 'Grandma',
        text: "Hello, {namePlayer}! How long I've been waiting for you! I thought I'd get really sick… But it's good that the cure is finally here... how's the road? How well do you know the rules of independent travel now?",
      },
      de: {
        name: 'Großmutter',
        text: 'Hallo, {namePlayer}! Wie lange habe ich auf dich gewartet! Ich dachte, ich werde krank... Aber es ist gut, dass die Medizin endlich da ist... Wie ist der Weg? Kennst du jetzt die Regeln der Selbstreise?',
      },
    },
  },
  {
    result3: { // отличный результат 18 баллов
      ru: {
        name: 'Бабушка',
        text: 'Здравствуй, {namePlayer}! Как хорошо, что у тебя получилось приехать так быстро! Спасибо за лекарство. Я тобой горжусь! И теперь хорошо знаешь все правила самостоятельного путешествия!',
      },
      en: {
        name: 'Grandma',
        text: "Hello, {namePlayer}! How nice that you were able to come so quickly! Thank you for the medicine. I'm proud of you! And now you know all the rules of independent travel well!",
      },
      de: {
        name: 'Großmutter',
        text: 'Hallo, {namePlayer}! Wie schön, dass du es geschafft hast, so schnell zu kommen! Danke für die Medizin. Ich bin stolz auf dich! Und jetzt kennst du alle Regeln der Selbstreise!',
      },
    }
  }
];