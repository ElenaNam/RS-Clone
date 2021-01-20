export interface AppState {
  userName: string,
  gender: 'girl' | 'boy',

  activeLevel: number,
  
}

export enum LevelActionType {
  START_NEW_LEVEL = 'NEW_LEVEL_STARTED'
}

export interface StartNewLevelAction {
  type: LevelActionType.START_NEW_LEVEL,
  // payload: {
    
  // },
}

export type Action = StartNewLevelAction;