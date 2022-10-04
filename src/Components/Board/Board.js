import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Board.css';
import Box from './Box';


export default function Board() {
  const { board, checkWinner } = useContext(GameContext);

  return (
    <div className="board">
      {board.map(({ space, content }) => (
        <Box key={space} space={space} content={content} checkWinner={checkWinner} />
      ))}
    </div>
  );
}