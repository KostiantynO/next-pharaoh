import { memo } from 'react';

const GameMemo = () => {
  return <div>page</div>;
};

const Game = memo(GameMemo);
Game.displayName = 'Game';
export default Game;
