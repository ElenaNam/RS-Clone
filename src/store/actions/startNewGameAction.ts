import {
  LevelActionType,
  StartNewLevelAction,
  RestartGameAction,
  SetUserNameAction,
  SetGenderAction,
  SetLanguageAction,
  AddToScoreGameAction,
  Gender,
  Lang,
} from '../types';

export const startNewLevel = (): StartNewLevelAction => ({
  type: LevelActionType.START_NEW_LEVEL,
  payload: {},
});

export const restartGame = (): RestartGameAction => ({
  type: LevelActionType.RESTART_GAME,
  payload: {},
});

export const setUserName = (userName: string): SetUserNameAction => ({
  type: LevelActionType.SET_USER_NAME,
  payload: userName,
});

export const setGender = (gender: Gender): SetGenderAction => ({
  type: LevelActionType.SET_GENDER,
  payload: gender,
});

export const setLanguage = (lang: Lang): SetLanguageAction => ({
  type: LevelActionType.SET_LANGUAGE,
  payload: lang,
});

export const addToScoreGame = (score: number): AddToScoreGameAction => ({
  type: LevelActionType.ADD_SCORE,
  payload: score,
});
