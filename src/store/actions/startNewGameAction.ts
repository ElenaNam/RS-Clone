import {
  LevelActionType,
  StartNewLevelAction,
  SetUserNameAction,
  SetGenderAction,
  Gender,
  Lang,
} from '../types';

export const startNewLevel = (): StartNewLevelAction => ({
  type: LevelActionType.START_NEW_LEVEL,
  payload: {},
  // payload: {

  // },
});

export const setUserName = (userName: string): SetUserNameAction => ({
  type: LevelActionType.SET_USER_NAME,
  payload: userName,
});

export const setGender = (gender: Gender): SetGenderAction => ({
  type: LevelActionType.SET_GENDER,
  payload: gender,
});

export const setLanguage = (lang: Lang): SetUserNameAction => ({
  type: LevelActionType.SET_USER_NAME,
  payload: lang,
});
