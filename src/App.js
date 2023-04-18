import Board from "./Components/Board-Components/Board";
import './App.css';
import Numbers from "./Components/Board-Components/Numbers";
import Letters from "./Components/Board-Components/Letters";

function App() {

    let pieces = [];

// Black choechinja
    pieces.push({ x: 1, y: 8, type: "rook", color: "black" });
    pieces.push({ x: 1, y: 7, type: "knight", color: "black" });
    pieces.push({ x: 1, y: 6, type: "bishop", color: "black" });
    pieces.push({ x: 1, y: 5, type: "queen", color: "black" });
    pieces.push({ x: 1, y: 4, type: "king", color: "black" });
    pieces.push({ x: 1, y: 3, type: "bishop", color: "black" });
    pieces.push({ x: 1, y: 2, type: "knight", color: "black" });
    pieces.push({ x: 1, y: 1, type: "rook", color: "black" });

    for (let i = 1; i <= 8; i++) {
        pieces.push({ x: 2, y: i, type: "pawn", color: "black" });
    }

// White choechinja
    pieces.push({ x: 8, y: 1, type: "rook", color: "white" });
    pieces.push({ x: 8, y: 2, type: "knight", color: "white" });
    pieces.push({ x: 8, y: 3, type: "bishop", color: "white" });
    pieces.push({ x: 8, y: 4, type: "queen", color: "white" });
    pieces.push({ x: 8, y: 5, type: "king", color: "white" });
    pieces.push({ x: 8, y: 6, type: "bishop", color: "white" });
    pieces.push({ x: 8, y: 7, type: "knight", color: "white" });
    pieces.push({ x: 8, y: 8, type: "rook", color: "white" });

    for (let i = 1; i <= 8; i++) {
        pieces.push({ x: 7, y: i, type: "pawn", color: "white" });
    }

// Empty squares
    for (let x = 1; x <= 8; x++) {
        for (let y = 3; y <= 6; y++) {
            pieces.push({ x: x, y: y, type: "empty" });
        }
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