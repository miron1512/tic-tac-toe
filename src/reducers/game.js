import { NEXT_MOVE, NEW_GAME } from '../actions/game';

const initialState = {
  settings: {
    player1: {
      name: 'Player1',
      symbol: 'close',
      nextPlayer: 'player2',
    },
    player2: {
      name: 'Player2',
      symbol: 'circle-o',
      nextPlayer: 'player1',
    },
  },
  startGamePlayer: 'player1',
  currentPlayerMove: 'player1',
  board: Array(9).fill(null),
}

const nextMove = (state, action) => {
  const { settings, currentPlayerMove, board } = state;
  return {
    ...state,
    currentPlayerMove: settings[currentPlayerMove].nextPlayer,
    board: board.map((v, i) => (
      i !== action.cell
        ? v
        : settings[currentPlayerMove].symbol
    )),
  };
}

const newGame = (state, action) => {
  const { settings, startGamePlayer, board } = state;
  return {
    ...state,
    startGamePlayer: settings[startGamePlayer].nextPlayer,
    currentPlayerMove: settings[startGamePlayer].nextPlayer,
    board: Array(9).fill(null),
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEXT_MOVE: {
      return nextMove(state, action);
    }
    case NEW_GAME: {
      return newGame(state, action);
    }
    default: {
      return state;
    }
  }
}