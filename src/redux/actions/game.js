import * as types from '../types/index'
export const run = (item) => {
  return {
    type: types.GAME_SQUARE_ADD,
    item
  }
}
export const back = () => {
  return {
    type: types.GAME_BAK_STEP
  }
}
export const reset = () => {
  return {
    type: types.GAME_RESET
  }
}