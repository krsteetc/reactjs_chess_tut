import Board from "./Components/Board-Components/Board";
import './App.css';
import Numbers from "./Components/Board-Components/Numbers";
import Letters from "./Components/Board-Components/Letters";

function App() {

    //name them squares
    //make them 64
    //rename x and y to files and ranks

    for (let x = 1; x <= 8; x++) {
        for (let y = 1; y <= 1; y++) {
            pieces.push({ x: x, y: y, type: "empty"});
            //set bg color, set peice, isSelected, is valid
        }
    }
    //do tuka imas prazna tabla

    //nad ova, dodavash pozicija kakva sto sakash
    pieces. ({ x: 8, y: 8, type: "rook_black"});

    let pieces = []; //not 64 :(
    //not squares :)

// Black choechinja
    pieces.push({ x: 8, y: 8, type: "rook_black"});
    pieces.push({ x: 7, y: 8, type: "knight_black"});
    pieces.push({ x: 6, y: 8, type: "bishop_black"});
    pieces.push({ x: 5, y: 8, type: "queen_black"});
    pieces.push({ x: 4, y: 8, type: "king_black"});
    pieces.push({ x: 3, y: 8, type: "bishop_black"});
    pieces.push({ x: 2, y: 8, type: "knight_black"});
    pieces.push({ x: 1, y: 8, type: "rook_black"});

    for (let i = 1; i <= 8; i++) {
        pieces.push({ x: i, y: 7, type: "pawn_black"});
    }

// White choechinja
    pieces.push({ x: 1, y: 1, type: "rook_white"});
    pieces.push({ x: 2, y: 1, type: "knight_white"});
    pieces.push({ x: 3, y: 1, type: "bishop_white"});
    pieces.push({ x: 4, y: 1, type: "queen_white"});
    pieces.push({ x: 5, y: 1, type: "king_white"});
    pieces.push({ x: 6, y: 1, type: "bishop_white"});
    pieces.push({ x: 7, y: 1, type: "knight_white"});
    pieces.push({ x: 8, y: 1, type: "rook_white"});

    for (let i = 1; i <= 8; i++) {
        pieces.push({ x: i, y: 2, type: "pawn_white"});
    }

// Empty squares
    for (let x = 1; x <= 8; x++) {
        for (let y = 3; y <= 6; y++) {
            pieces.push({ x: x, y: y, type: "empty"});

        }
    }

    const isSquareDark = (x,y) =>{
        return (parseInt(x) + parseInt(y)) % 2 === 0;
    }

    return (
    <div className='App'>
            <Board isSquareDark={isSquareDark} positions={pieces} />
            <Numbers/>
            <Letters/>
        </div>
    );
}

export default App;