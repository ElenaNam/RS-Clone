import { combineReducers } from 'redux';
import { startNewGameReducer } from './reducers/startNewGameReducer';

export const rootReducer = combineReducers({
  game: startNewGameReducer, 
});