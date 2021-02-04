import { initialState } from '../initialState';
import { AppState, GameState, LevelActionType, Action } from '../types';


export const startNewGameReducer = (
  state = initialState,
  action: Action
): GameState => {

  switch (action.type) {
    case LevelActionType.START_NEW_LEVEL:
      console.log('start new level work');
      return {
        ...state,

        activeLevel: state.activeLevel + 1,
      };

    case LevelActionType.RESTART_GAME:
      console.log('RESTART');
      return {
        ...initialState,

        activeLevel: 0,
      };
      
    case LevelActionType.SET_USER_NAME:
      console.log('set name work');
      return {
        ...state,

        userName: action.payload,
      };

    case LevelActionType.SET_GENDER:
      console.log('set gender work');
      return {
        ...state,

        gender: action.payload,
      };
    case LevelActionType.SET_LANGUAGE:
      console.log('set language work');
      return {
        ...state,

        lang: action.payload,
      };
    case LevelActionType.ADD_SCORE:
      console.log('add score work');
      return {
        ...state,

        scoreGame: state.scoreGame + action.payload,
      };
  

    default:
      return state;
  }
};
