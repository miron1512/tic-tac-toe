import { connect } from 'react-redux';
import { gameOverSelector } from './selectors';
import { newGame } from '../actions/game';
import GameStatus from '../components/GameStatus';

const mapStateToProps = state => ({
  gameOver: gameOverSelector(state),
  currentPlayerMove: state.game.currentPlayerMove,
  player1: state.game.settings.player1,
  player2: state.game.settings.player2,
});

const mapDispatchToProps = dispatch => ({
  newGame: () => dispatch(newGame()),
});

const GameStatusContainer = connect(mapStateToProps, mapDispatchToProps)(GameStatus);

export default GameStatusContainer;