import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Board.css';

export default function Box({ space, content }) {
  const { updateBoard } = useContext(GameContext);

  return (
    <div className="box" onClick={() => updateBoard(space)} id={space}>
      {content}
    </div>
  );
}