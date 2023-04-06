import Board from "./Components/Board";
import './App.css';
import Numbers from "./Components/Numbers";
import Letters from "./Components/Letters";

function App() {

    const isDark = (x,y) =>{
        return (parseInt(x) + parseInt(y)) % 2 === 0;
    }

    return (
        <div className='App'>
            <Board isDark={isDark} />
            <Numbers/>
            <Letters/>
        </div>
    );
}

export default App;
