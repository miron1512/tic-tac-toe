import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

import './GameStatus.scss';

const GameStatus = props => {
  const { player1, player2, currentPlayerMove, gameOver, newGame } = props;

  return (
    <div className="game-status">
      <div className="players">
        <div className={`player${currentPlayerMove === 'player1' ? ' active' : ''}`}>
          <Icon icon={player1.symbol} />
          {player1.name}
        </div>
        <div className="vs">vs</div>
        <div className={`player${currentPlayerMove === 'player2' ? ' active' : ''}`}>
          {player2.name}
          <Icon icon={player2.symbol} />
        </div>
      </div>
      {
        gameOver
        && (
          <div className='game-over'>
            {
              typeof gameOver === 'object'
                ? `${gameOver.name} won!`
                : 'DRAW'
            }
          </div>
        )
      }
      <Icon className="new-game" icon="repeat" onClick={newGame} />
    </div>
  );
};

GameStatus.propTypes = {
  gameOver: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  currentPlayerMove: PropTypes.string,
  player1: PropTypes.object,
  player2: PropTypes.object,
  newGame: PropTypes.func,
};

export default GameStatus;