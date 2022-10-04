import './App.css';
import Board from './Components/Board/Board';
import Header from './Components/Header/Header';



function App() {
  return (
    <div className="App">
      <h1>Alchemy Tic-Tac-Toe</h1>
      <Header />
      <Board />
    </div>
  );
}

export default App;
