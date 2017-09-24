import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

import './Board.scss';

const Cell = ({ value, onClick }) => (
  <div className="cell" onClick={onClick}>
    {
      value
      && (
        <Icon icon={value} />
      )
    }
  </div>
);

const Board = ({ board, gameOver, nextMove }) => (
  <div className="board">
    {gameOver && <div className="game-over" />}
    {
      board.map((v, i) => (
        <Cell key={i} value={v} onClick={v ? null : (() => { nextMove(i); })} />
      ))
    }
  </div>
);

Board.propTypes = {
  board: PropTypes.array.isRequired,
  gameOver: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  nextMove: PropTypes.func.isRequired,
};

export default Board;