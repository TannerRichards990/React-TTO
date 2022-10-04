import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Header.css';

export default function GameHeader() {
  const { gameMessage, active, resetGame } = useContext(GameContext);

  return (
    <div className="game-header">
      <h3>{gameMessage}</h3>
      {!active && <button onClick={resetGame}>Play Again</button>}
    </div>
  );
}
