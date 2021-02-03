export type Gender = 'girl' | 'boy';
export type Lang = 'ru' | 'en' | 'de';

export interface GameState {
  userName: string;
  gender: Gender;

  activeLevel: number;
  lang: Lang;
  scoreGame: number;
}

export interface AppState {
  // game: {
  //   userName: string,
  //   gender: 'girl' | 'boy',

  //   activeLevel: number,
  //   lang: 'ru' | 'en' | 'de',
  // }
  game: GameState;
}

export enum LevelActionType {
  START_NEW_LEVEL = 'NEW_LEVEL_STARTED',
  SET_USER_NAME = 'USER_NAME_CHANGED',
  SET_GENDER = 'GENDER_CHANGED',
  SET_LANGUAGE = 'LANGUAGE_CHANGED',
  ADD_SCORE = 'SCORE_ADDED'
}

export interface StartNewLevelAction {
  type: LevelActionType.START_NEW_LEVEL;
  payload: {};
}

export interface SetUserNameAction {
  type: LevelActionType.SET_USER_NAME;
  payload: string;
}

export interface SetGenderAction {
  type: LevelActionType.SET_GENDER;
  payload: Gender;
}

export interface SetLanguageAction {
  type: LevelActionType.SET_LANGUAGE;
  payload: Lang;
}
export interface AddToScoreGameAction {
  type: LevelActionType.ADD_SCORE;
  payload: number;
}

export type Action =
  | StartNewLevelAction
  | SetUserNameAction
  | SetGenderAction
  | SetLanguageAction
  | AddToScoreGameAction;
