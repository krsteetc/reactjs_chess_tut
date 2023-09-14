import Board from "./Components/Board-Components/Board";
import './App.css';
import Numbers from "./Components/Board-Components/Numbers";
import Letters from "./Components/Board-Components/Letters";
import {useState} from "react";
import FEN from "./Components/FEN-Components/FEN";
import {Chess} from "chess.js";

function App() {



//setting up the initial squares of the board
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
                isLegal: false
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



    function fenToSquaresConvertor (fen) {
        let fenPositions = [...positions];
        let indexCounter = 0;
        for (let i = 0; fen[i] !== ' '; i++) {
            if(fen[i] !== '/'){
                if(!isNaN(fen[i])){
                    for (let j = 0; j<parseInt(fen[i]); j++){
                        fenPositions[indexCounter].type = 'empty';
                        fenPositions[indexCounter].isEmpty = true;
                        indexCounter += 1;
                    }
                }
                else {
                    switch (fen[i]){
                        case 'p':
                            fenPositions[indexCounter].type = 'pawn_black'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter +=1;
                            break;
                        case 'r':
                            fenPositions[indexCounter].type = 'rook_black'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter +=1;
                            break;
                        case 'n':
                            fenPositions[indexCounter].type = 'knight_black'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter +=1;
                            break;
                        case 'b':
                            fenPositions[indexCounter].type = 'bishop_black'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter +=1;
                            break;
                        case 'q':
                            fenPositions[indexCounter].type = 'queen_black'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter +=1;
                            break;
                        case 'k':
                            fenPositions[indexCounter].type = 'king_black'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter +=1;
                            break;
                        case 'P':
                            fenPositions[indexCounter].type = 'pawn_white'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter +=1;
                            break;
                        case 'R':
                            fenPositions[indexCounter].type = 'rook_white'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter +=1;
                            break;
                        case 'N':
                            fenPositions[indexCounter].type = 'knight_white'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter +=1;
                            break;
                        case 'B':
                            fenPositions[indexCounter].type = 'bishop_white'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter +=1;
                            break;
                        case 'Q':
                            fenPositions[indexCounter].type = 'queen_white'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter +=1;
                            break;
                        case 'K':
                            fenPositions[indexCounter].type = 'king_white'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter +=1;
                            break;
                    }
                }
            }
        }

            //update position data

    }

    function setLegalMoves (updatedSquares) {
        setPositions(updatedSquares)
    } //trgni

    function generateFEN(squares) {
        let fen = "";
        let emptyCounter = 0;

        for (let i = 8; i > 0; i--) {
            for (let j = 1; j <= 8; j++) {
                let currentSquare = squares.find(
                    (p) => p.x === j && p.y === i
                );
                if (currentSquare.type === "empty") {
                    emptyCounter += 1;
                } else {
                    if (emptyCounter !== 0) {
                        fen += emptyCounter.toString();
                        emptyCounter = 0;
                    }
                    if (currentSquare.type.split('_')[1] === 'white'){
                        if (currentSquare.type[0] ==='k' && currentSquare.type[1] ==='n') {
                            fen += currentSquare.type[1].toUpperCase()
                        }
                        else{
                            fen += currentSquare.type[0].toUpperCase();
                        }
                    }
                    else {
                        if (currentSquare.type[0] ==='k' && currentSquare.type[1] ==='n') {
                            fen += currentSquare.type[1]
                        }
                        else{
                            fen += currentSquare.type[0]
                        }
                    }
                }
            }
            if (emptyCounter !== 0) {
                fen += emptyCounter.toString();
                emptyCounter = 0;
            }
            if (i > 1) {
                fen += "/";
            }
        }

        setFen(fen)
    }

    const positionMap = new Map([
        [1,'a'],
        [2,'b'],
        [3,'c'],
        [4,'d'],
        [5,'e'],
        [6,'f'],
        [7,'g'],
        [8,'h'],

    ]);


    const chess = new Chess();

    const [positions, setPositions] = useState(squares);

    const [fen, setFen] = useState(chess.fen());

    const initialTurnIndex = chess.fen().indexOf(' ') + 1;

    const [turn, setTurn] = useState(fen[initialTurnIndex]);

    const [selectedPiece, setSelectedPiece] = useState(null);

    const [isSelected, setIsSelected] = useState(false);



    function movePiece (x,y,selectedPiece) {
        const from = positionMap.get(selectedPiece.x) + selectedPiece.y;
        const to = positionMap.get(x) + y;
        chess.move({from:from, to:to})
        setFen(chess.fen());
        if(turn === 'w'){
            setTurn('b')
        }
        else {
            setTurn('w')
        }
        fenToSquaresConvertor(chess.fen())
        //update position data
    }


    function fenChangeHandler (fen) {
        fenToSquaresConvertor(fen);
    }

    function promotePawn (type,color,x,y){
        const updatedSquares = [...positions];
        const promotedPawn = positions.findIndex((obj) => obj.x === x && obj.y === y);
        updatedSquares[promotedPawn] = { ...updatedSquares[promotedPawn], type: `${type}_${color}`, isEmpty: false };
        setPositions(updatedSquares);
    }

    const updateFen = (newFen) => {
        setFen(newFen)
    }


    return (
        <div className='App'>
            <Board
                squares={positions}
                onMovePiece={movePiece}
                onSetLegalMoves={setLegalMoves}
                promotePawn={promotePawn}
                setFen={updateFen}
                turn={turn}
                setTurn={setTurn}
                selectedPiece={selectedPiece}
                isSelected={isSelected}
                setPiece={setSelectedPiece}
                setIsSelected={setIsSelected}
            />
            <Numbers/>
            <Letters/>
            <FEN fen={fen} onFenChange={fenChangeHandler}  />
        </div>
    );
}

export default App;