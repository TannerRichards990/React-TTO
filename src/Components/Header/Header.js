import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

export default function GameHeader() {
  const { gameMessage, active, resetGame } = useContext(GameContext);

  return (
    <div className="game-header">
      <h2>{gameMessage}</h2>
      {!active && <button onClick={resetGame}>Play Again</button>}
    </div>
  );
}
