import Board from "./Components/Board-Components/Board";
import './App.css';
import Numbers from "./Components/Board-Components/Numbers";
import Letters from "./Components/Board-Components/Letters";

function App() {

    let pieces = [];

// Black choechinja
    pieces.push({ x: 1, y: 8, type: "rook", color: "black" });
    pieces.push({ x: 2, y: 8, type: "knight", color: "black" });
    pieces.push({ x: 3, y: 8, type: "bishop", color: "black" });
    pieces.push({ x: 4, y: 8, type: "queen", color: "black" });
    pieces.push({ x: 5, y: 8, type: "king", color: "black" });
    pieces.push({ x: 6, y: 8, type: "bishop", color: "black" });
    pieces.push({ x: 7, y: 8, type: "knight", color: "black" });
    pieces.push({ x: 8, y: 8, type: "rook", color: "black" });

    for (let i = 1; i <= 8; i++) {
        pieces.push({ x: i, y: 7, type: "pawn", color: "black" });
    }

// White choechinja
    pieces.push({ x: 1, y: 1, type: "rook", color: "white" });
    pieces.push({ x: 2, y: 1, type: "knight", color: "white" });
    pieces.push({ x: 3, y: 1, type: "bishop", color: "white" });
    pieces.push({ x: 4, y: 1, type: "queen", color: "white" });
    pieces.push({ x: 5, y: 1, type: "king", color: "white" });
    pieces.push({ x: 6, y: 1, type: "bishop", color: "white" });
    pieces.push({ x: 7, y: 1, type: "knight", color: "white" });
    pieces.push({ x: 8, y: 1, type: "rook", color: "white" });

    for (let i = 1; i <= 8; i++) {
        pieces.push({ x: i, y: 2, type: "pawn", color: "white" });
    }

    const isDark = (x,y) =>{
        return (parseInt(x) + parseInt(y)) % 2 === 0;
    }

    return (
    <div className='App'>
            <Board isDark={isDark} positions={pieces} />
            <Numbers/>
            <Letters/>
        </div>
    );
}

export default App;