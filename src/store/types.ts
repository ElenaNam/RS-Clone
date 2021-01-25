export interface GameState {
  // game: {
  //   userName: string,
  //   gender: 'girl' | 'boy',
  
  //   activeLevel: number,
  //   lang: 'ru' | 'en' | 'de',
  // }
  
  userName: string,
  gender: 'girl' | 'boy',

  activeLevel: number,
  lang: 'ru' | 'en' | 'de',
  
}

export interface AppState {
  // game: {
  //   userName: string,
  //   gender: 'girl' | 'boy',
  
  //   activeLevel: number,
  //   lang: 'ru' | 'en' | 'de',
  // }
  game: GameState,
}

export enum LevelActionType {
  START_NEW_LEVEL = 'NEW_LEVEL_STARTED'
}

export interface StartNewLevelAction {
  type: LevelActionType.START_NEW_LEVEL,
  payload: {
    
  },
}

export type Action = StartNewLevelAction;