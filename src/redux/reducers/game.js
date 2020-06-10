import { GAME_SQUARE_ADD, GAME_RESET, GAME_BAK_STEP } from '../types/index'
let game = {
  square: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  forerunner: 'X',
  winner: null,
  history: []
}

function init() {
  return {
    square: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    forerunner: 'X',
    winner: null,
    history: []
  }
}
function whoWin(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export default (state = game, action) => {
  let { square, forerunner, winner, history } = state
  switch (action.type) {
    case GAME_SQUARE_ADD:
      let { item } = action
      if (!square[item]) {
        square[item] = forerunner
        forerunner = forerunner === 'X' ? 'O' : 'X'
        history.push({ square: Array.prototype.concat([], square), forerunner })
        winner = whoWin(square)
      }
      return Object.assign({}, state, {
        square,
        forerunner,
        history,
        winner
      })
    case GAME_RESET:
      return init()
    case GAME_BAK_STEP:
      // debugger
      if (history.length > 1) {
        history = history.slice(0, history.length - 1)
      } else {
        return init()
      }
      forerunner = history[history.length - 1].forerunner
      square = history[history.length - 1].square
      winner = whoWin(square)
      return Object.assign({}, state, {
        square,
        forerunner,
        history,
        winner
      })
    default:
      return state
  }
}
