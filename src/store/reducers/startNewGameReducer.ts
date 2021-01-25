import { initialState } from '../initialState';
import { AppState, GameState, LevelActionType, Action } from '../types';

// export const startNewGameReducer = (state = initialState, action) => {
//   return state;
// };

export const startNewGameReducer = (
  state = initialState,
  action: Action
): GameState => {

  switch (action.type) {
    case LevelActionType.START_NEW_LEVEL:
      console.log('start new level work');

      // const nextLevel = state.activeLevel + 1;

      // return {
      //   ...state,
      //   game: {
      //     ...state.game,
      //     userName: 'dddfff',
      //     activeLevel: state.game.activeLevel + 1,
      //   }
      // };
      return {
        ...state,
        
        userName: 'dddfff',
        activeLevel: state.activeLevel + 1,
      };


    default:
      return state;
  }
};
