import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const begginingState = new Array(9).fill().map((val, index) => 
    ({ space: index, content: null }));

  const [board, setBoard] = useState(begginingState);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState(`It's Your Turn ${currentPlayer}`);
  const [active, setActive] = useState(true);

  const resetGame = () => {
    setBoard(begginingState);
    setCurrentPlayer('X');
    setGameMessage(`It's Your Turn ${currentPlayer}`);
    setActive(true);
  };

  const updateBoard = (space) => {
    if (!active) return;
    if (board[space].content !== '') return;

    setBoard((prevBoard) => 
      prevBoard.map((box) => 
        box.space === space ? { ...box, content: currentPlayer } : box));

    setCurrentPlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'));
  };

  const checkWinner = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningCombos.forEach((combo) => {
      const [a, b, c] = combo;
      if (
        board[a].content &&
        board[a].content === board[b].content &&
        board[a].content === board[c].content
      ) {
        setGameMessage(`Player ${currentPlayer} Wins!`);
        setActive(false);
      }
    });

    if (board.every((box) => box.content !== null)) {
      setGameMessage('Tie Game!');
      setActive(false);
    }
  };

  return (
    <GameContext.Provider
      value={{
        board,
        currentPlayer,
        gameMessage,
        updateBoard,
        checkWinner,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };

