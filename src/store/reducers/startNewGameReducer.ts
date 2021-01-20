import { initialState } from '../initialState';
import { AppState, LevelActionType, Action } from '../types';

// export const startNewGameReducer = (state = initialState, action) => {
//   return state;
// };

export const startNewGameReducer = (
  state = initialState,
  action: Action
): AppState => {
  switch (action.type) {
    case LevelActionType.START_NEW_LEVEL:
      console.log('start new level work');

      

      return {
        ...state,
        userName: 'ddddJ'
      };

    default:
      return state;
  }
};
