import Board from "./Components/Board-Components/Board";
import './App.css';
import Numbers from "./Components/Board-Components/Numbers";
import Letters from "./Components/Board-Components/Letters";
import {useState} from "react";

function App() {

    let squares = [];
    for (let i = 8; i >= 1; i--) {
        for (let j = 1; j <= 8; j++) {
            squares.push({
                x: j,
                y: i,
                type: 'empty',
                isSelected: false,
                isEmpty: true,
                isDark: (j + i) % 2 === 0,
            });
        }
    }

    squares[0].type = 'rook_black';  //Black pieces
    squares[1].type = 'knight_black';
    squares[2].type = 'bishop_black';
    squares[3].type = 'queen_black';
    squares[4].type = 'king_black';
    squares[5].type = 'bishop_black';
    squares[6].type = 'knight_black';
    squares[7].type = 'rook_black';

    for (let j = 0; j < 8; j++) {
        squares[j + 8].type = 'pawn_black';
        squares[j + 8].isEmpty = false;
        squares[j].isEmpty = false;
    }

    squares[56].type = 'rook_white';  //White pieces
    squares[57].type = 'knight_white';
    squares[58].type = 'bishop_white';
    squares[59].type = 'queen_white';
    squares[60].type = 'king_white';
    squares[61].type = 'bishop_white';
    squares[62].type = 'knight_white';
    squares[63].type = 'rook_white';

    for (let j = 0; j < 8; j++) {
        squares[j + 48].type = 'pawn_white';
        squares[j + 48].isEmpty = false;
        squares[j + 56].isEmpty = false;
    }

    const [positions, setPositions] = useState(squares)

    function movePiece (updatedSquares) {
        setPositions(updatedSquares);
    }


    return (
        <div className='App'>
            <Board squares={positions} onMovePiece={movePiece} />
            <Numbers/>
            <Letters/>
        </div>
    );
}

export default App;