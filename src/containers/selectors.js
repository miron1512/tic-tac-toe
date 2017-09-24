import { createSelector } from 'reselect';

const getBoard = state => state.game.board;
const getSettings = state => state.game.settings;

const isWinGame = b => {
  if (
    b[0] === b[4] && b[4] === b[8]
    || b[2] === b[4] && b[4] === b[6]
    || b[1] === b[4] && b[4] === b[7]
    || b[3] === b[4] && b[4] === b[5]
  ) {
    return b[4];
  }

  if (
    b[0] === b[1] && b[1] === b[2]
    || b[0] === b[3] && b[3] === b[6]
  ) {
    return b[0];
  }

  if (
    b[2] === b[5] && b[5] === b[8]
    || b[6] === b[7] && b[7] === b[8]
  ) {
    return b[8];
  }

  return null;
}

export const gameOverSelector = createSelector(
  [getBoard, getSettings],
  (board, settings) => {
    const isWin = isWinGame(board);
    if (isWin) {
      const { player1, player2 } = settings;
      return player1.symbol === isWin
        ? player1
        : player2;
    }

    if (board.length !== board.filter(v => v).length) {
      return null;
    }

    return 'draw';
  }

)