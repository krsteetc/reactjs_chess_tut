import Board from "./Components/Board-Components/Board";
import './App.css';
import Numbers from "./Components/Board-Components/Numbers";
import Letters from "./Components/Board-Components/Letters";

function App() {

    let pieces = [];

// Black choechinja
    pieces.push({ x: 8, y: 1, type: "rook_black",highlighted: false});
    pieces.push({ x: 7, y: 1, type: "knight_black",highlighted: false});
    pieces.push({ x: 6, y: 1, type: "bishop_black",highlighted: false});
    pieces.push({ x: 5, y: 1, type: "queen_black",highlighted: false});
    pieces.push({ x: 4, y: 1, type: "king_black",highlighted: false});
    pieces.push({ x: 3, y: 1, type: "bishop_black",highlighted: false});
    pieces.push({ x: 2, y: 1, type: "knight_black",highlighted: false});
    pieces.push({ x: 1, y: 1, type: "rook_black",highlighted: false});

    for (let i = 1; i <= 8; i++) {
        pieces.push({ x: i, y: 2, type: "pawn_black",highlighted: false});
    }

// White choechinja
    pieces.push({ x: 1, y: 8, type: "rook_white",highlighted: false});
    pieces.push({ x: 2, y: 8, type: "knight_white",highlighted: false});
    pieces.push({ x: 3, y: 8, type: "bishop_white",highlighted: false});
    pieces.push({ x: 4, y: 8, type: "queen_white",highlighted: false});
    pieces.push({ x: 5, y: 8, type: "king_white",highlighted: false});
    pieces.push({ x: 6, y: 8, type: "bishop_white",highlighted: false});
    pieces.push({ x: 7, y: 8, type: "knight_white",highlighted: false});
    pieces.push({ x: 8, y: 8, type: "rook_white",highlighted: false});

    for (let i = 1; i <= 8; i++) {
        pieces.push({ x: i, y: 7, type: "pawn_white",highlighted: false});
    }

// Empty squares
    for (let x = 1; x <= 8; x++) {
        for (let y = 3; y <= 6; y++) {
            pieces.push({ x: x, y: y, type: "empty" });

        }
    }

    const isSquareDark = (x,y) =>{
        return (parseInt(x) + parseInt(y)) % 2 === 0;
    }

    return (
    <div className='App'>
            <Board isSquareDark={isSquareDark} positions={pieces}  />
            <Numbers/>
            <Letters/>
        </div>
    );
}

export default App;