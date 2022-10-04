import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Board.css';
import Box from '../Box/Box';

export default function Board() {
  const { board, checkWinner } = useContext(GameContext);

  return (
    <div className="board">
      {board.map((box) => (
        <Box
          key={box.space}
          space={box.space}
          content={box.content}
          checkWinner={checkWinner}
        />
      ))}
    </div>
  );
}