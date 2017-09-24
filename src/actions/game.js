
export const NEXT_MOVE = 'NEXT_MOVE';

export function nextMove(cell) {
  return {
    type: NEXT_MOVE,
    cell,
  };
};

export const NEW_GAME = 'NEW_GAME';

export function newGame() {
  return {
    type: NEW_GAME,
  };
};