import Board from "./Components/Board-Components/Board";
import './App.css';
import Numbers from "./Components/Board-Components/Numbers";
import Letters from "./Components/Board-Components/Letters";
import {useEffect, useState} from "react";
import FEN from "./Components/FEN-Components/FEN";
import {Chess} from "chess.js";

function App() {

//setting up the initial positions of the board
    let initialPositions = [];
    for (let i = 8; i >= 1; i--) {
        for (let j = 1; j <= 8; j++) {
            initialPositions.push({
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

    initialPositions[0].type = 'rook_black';  //Black pieces
    initialPositions[1].type = 'knight_black';
    initialPositions[2].type = 'bishop_black';
    initialPositions[3].type = 'queen_black';
    initialPositions[4].type = 'king_black';
    initialPositions[5].type = 'bishop_black';
    initialPositions[6].type = 'knight_black';
    initialPositions[7].type = 'rook_black';

    for (let j = 0; j < 8; j++) {
        initialPositions[j + 8].type = 'pawn_black';
        initialPositions[j + 8].isEmpty = false;
        initialPositions[j].isEmpty = false;
    }

    initialPositions[56].type = 'rook_white';  //White pieces
    initialPositions[57].type = 'knight_white';
    initialPositions[58].type = 'bishop_white';
    initialPositions[59].type = 'queen_white';
    initialPositions[60].type = 'king_white';
    initialPositions[61].type = 'bishop_white';
    initialPositions[62].type = 'knight_white';
    initialPositions[63].type = 'rook_white';

    for (let j = 0; j < 8; j++) {
        initialPositions[j + 48].type = 'pawn_white';
        initialPositions[j + 48].isEmpty = false;
        initialPositions[j + 56].isEmpty = false;
    }

    const positionMap = new Map([  //used for converting numerical coordinates to chess-like format (Ex. 5,4 => e4 )
        [1,'a'],
        [2,'b'],
        [3,'c'],
        [4,'d'],
        [5,'e'],
        [6,'f'],
        [7,'g'],
        [8,'h'],
    ]);

    const invertedPositionMap = new Map([  //used for converting chess-like format to numerical coordinates (Ex. e4 => 5,4 )
        ['a',1],
        ['b',2],
        ['c',3],
        ['d',4],
        ['e',5],
        ['f',6],
        ['g',7],
        ['h',8],
    ]);


    // STATE HOOKS

    const [chess, setChess] = useState(new Chess());

    const [positions, setPositions] = useState(initialPositions);

    const [fen, setFen] = useState(chess.fen());

    const initialTurnIndex = chess.fen().indexOf(' ') + 1;

    const [turn, setTurn] = useState(fen[initialTurnIndex]);

    const [selectedPiece, setSelectedPiece] = useState(null);

    const [isSelected, setIsSelected] = useState(false);

    const [currentLegalMoves, setCurrentLegalMoves] = useState([]);


    // FUNCTIONS

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
        setPositions(fenPositions)
    } //convert FEN notation to our custom squares notation

    function movePiece (x,y,selectedPiece) {

        const from = positionMap.get(selectedPiece.x) + selectedPiece.y;
        const to = positionMap.get(x) + y;
        chess.move({from:from, to:to})
        if(turn === 'w'){
            setTurn('b')
        }
        else {
            setTurn('w')
        }
        setFen(chess.fen());
        setTurn(chess.turn());
        fenToSquaresConvertor(chess.fen());

       setCurrentLegalMoves([])

    }

    function getLegalMoves(x,y) {
        const square = positionMap.get(x) + y;
        const moves = chess.moves({square:square});
        const updatedPositions = [...positions];

        const legalMoveIndices = moves.map((move) => {
            const numberIndex = move.search(/\d/); // searches for the index of the number in the move string (Ex. index of 3 in Qb3)
            const letterIndex = numberIndex - 1;
            const xCoordinate = invertedPositionMap.get(move[letterIndex]); // convert alphabetic to numerical coordinate
            const yCoordinate = parseInt(move[numberIndex]);
           return  positions.findIndex((obj) => obj.x === xCoordinate && obj.y === yCoordinate)
        })

        for (let i = 0; i < positions.length; i++){
            if(i === legalMoveIndices[0] || i === legalMoveIndices[1]){
                updatedPositions[i] = {...updatedPositions[i], isLegal: true}
            }
            else{
                updatedPositions[i] = {...updatedPositions[i], isLegal: false}
            }
        }
        setPositions(updatedPositions)
    } //returns the legal moves for a given piece (coordinates on the board) and sets them as legal

    const updateFen = (newFen) => {
        setFen(newFen)
    } //updates the fen in the FEN component

    function fenChangeHandler (newFen) {
        fenToSquaresConvertor(newFen);
        setFen(newFen)
        chess.load(newFen)
        setTurn(newFen[newFen.indexOf(' ') + 1])
    } //updates the board with the new user-inputted fen and feeds the fen to the game engine

    function promotePawn (type,color,x,y){
        const updatedSquares = [...positions];
        const promotedPawn = positions.findIndex((obj) => obj.x === x && obj.y === y);
        updatedSquares[promotedPawn] = { ...updatedSquares[promotedPawn], type: `${type}_${color}`, isEmpty: false };
        setPositions(updatedSquares);
    }  //may be removed


    return (
        <div className='App'>
            <Board
                squares={positions}
                onMovePiece={movePiece}
                promotePawn={promotePawn}
                setFen={updateFen}
                turn={turn}
                setTurn={setTurn}
                selectedPiece={selectedPiece}
                isSelected={isSelected}
                setPiece={setSelectedPiece}
                setIsSelected={setIsSelected}
                getLegalMoves={getLegalMoves}
                currentLegalMoves={currentLegalMoves}
            />
            <Numbers/>
            <Letters/>
            <FEN fen={fen} onFenChange={fenChangeHandler}  />
        </div>
    );
}

export default App;