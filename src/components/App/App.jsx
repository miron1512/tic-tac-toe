import React from 'react';
import BoardContainer from '../../containers/BoardContainer';
import GameStatusContainer from '../../containers/GameStatusContainer';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <GameStatusContainer />
      <BoardContainer />
    </div>
  );
};

export default App;
