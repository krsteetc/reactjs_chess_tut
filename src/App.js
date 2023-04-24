import Board from "./Components/Board";
import './App.css';
import Numbers from "./Components/Numbers";
import Letters from "./Components/Letters";

function App() {

    let pieces = [];

// Black choechinja
    pieces.push({ x: 1, y: 8, type: "rook_black" });
    pieces.push({ x: 1, y: 7, type: "knight_black" });
    pieces.push({ x: 1, y: 6, type: "bishop_black" });
    pieces.push({ x: 1, y: 5, type: "queen_black" });
    pieces.push({ x: 1, y: 4, type: "king_black" });
    pieces.push({ x: 1, y: 3, type: "bishop_black" });
    pieces.push({ x: 1, y: 2, type: "knight_black" });
    pieces.push({ x: 1, y: 1, type: "rook_black" });

    for (let i = 1; i <= 8; i++) {
        pieces.push({ x: 2, y: i, type: "pawn_black" });
    }

// White choechinja
    pieces.push({ x: 8, y: 1, type: "rook_white" });
    pieces.push({ x: 8, y: 2, type: "knight_white" });
    pieces.push({ x: 8, y: 3, type: "bishop_white" });
    pieces.push({ x: 8, y: 5, type: "queen_white" });
    pieces.push({ x: 8, y: 4, type: "king_white" });
    pieces.push({ x: 8, y: 6, type: "bishop_white" });
    pieces.push({ x: 8, y: 7, type: "knight_white" });
    pieces.push({ x: 8, y: 8, type: "rook_white" });

    for (let i = 1; i <= 8; i++) {
        pieces.push({ x: 7, y: i, type: "pawn_white" });
    }

// Empty squares
    for (let x = 1; x <= 8; x++) {
        for (let y = 3; y <= 6; y++) {
            pieces.push({ x: x, y: y, type: "empty" });
        }
    }

    const isDarkSquare = (x,y) =>{
        return (parseInt(x) + parseInt(y)) % 2 === 0;
    }

    return (
    <div className='App'>
            <Board isDarkSquare={isDarkSquare} positions={pieces} />
            <Numbers/>
            <Letters/>
        </div>
    );
}

export default App;