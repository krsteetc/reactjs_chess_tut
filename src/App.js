import Board from "./Components/Board";
import './App.css';
import Numbers from "./Components/Numbers";
import Letters from "./Components/Letters";

function App() {
  return (
      <div className='App'>
        <Board/>
          <Numbers/>
          <Letters/>
      </div>
  );
}

export default App;
