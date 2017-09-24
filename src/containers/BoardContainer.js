import { connect } from 'react-redux';
import { nextMove } from '../actions/game';
import { gameOverSelector } from './selectors';
import Board from '../components/Board';

const mapStateToProps = state => ({
  board: state.game.board,
  gameOver: gameOverSelector(state),
});

const mapDispatchToProps = dispatch => ({
  nextMove: (cell) => {
    dispatch(nextMove(cell))
  },
})

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardContainer;