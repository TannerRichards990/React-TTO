import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const beginningState = new Array(9).fill().map((val, index) => 
    ({ space: index, content: '' }));

  const [board, setBoard] = useState(beginningState);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMessage, setGameMessage] = useState(`It's Your Turn ${currentPlayer}`);
  const [active, setActive] = useState(true);

  const resetGame = () => {
    setBoard(beginningState);
    setActive(true);
    
    
  };

  
  
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
  const checkWinner = () => {
    if (!active) return;
    console.log('work');
    winningCombos.forEach((combo) => {
      const [a, b, c] = combo;
      if (board[a].content && board[a].content === board[b].content && board[a].content === board[c].content)
      
      {
        console.log(a, b, c);
        setGameMessage(`${board[a].content} Wins!`);
        setActive(false);
        return;
      }
    });
    if (board.every((box) => box.content !== '')) {
      setGameMessage('Tie Game!');
      setActive(false);
    }
  };
  const updateBoard = (space) => {
    if (!active) return;

    if (board[space].content !== '') return;

    setBoard((prevBoard) => 
      prevBoard.map((box) => 
        box.space === space ? { ...box, content: currentPlayer } : box));

    setCurrentPlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'));
    setGameMessage(`It's Your Turn ${currentPlayer === 'X' ? 'O' : 'X'}`);
  };

  checkWinner();
  
  return (
    <GameContext.Provider value={{
      board,
      gameMessage,
      active,
      resetGame,
      updateBoard,
      checkWinner,
    }}
    >
      {children}
    </GameContext.Provider>
  );
};
    
//     console.log('cool');

//     winningCombos.forEach((combo) => {
//       const [a, b, c] = combo;
//       console.log(board[a].content);
//       if (board[a].content === '' || board[b].content === '' || board[c].content === '') {
//         return;
//       }
//       else {
//         if (
//           board[a].content === board[b].content === board[c].content === 'X' 
//         ) {
//           setGameMessage(`Player ${currentPlayer} Wins!`);
//           setActive(false);
//           console.log('gameover');
//         }}
//     });

//     if (board.every((box) => box.content !== null)) {
//       setGameMessage('Tie Game!');
//       setActive(false);
//     }
//   };

//   return (
//     <GameContext.Provider
//       value={{
//         board,
//         currentPlayer,
//         gameMessage,
//         updateBoard,
//         checkWinner,
//         resetGame,
//       }}
//     >
//       {children}
//     </GameContext.Provider>
  
//   );
// };


export { GameContext, GameProvider };

