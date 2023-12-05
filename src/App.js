import Board from "./Components/Board-Components/Board";
import './App.css';
import Numbers from "./Components/Board-Components/Numbers";
import Letters from "./Components/Board-Components/Letters";
import {useState} from "react";
import FEN from "./Components/FEN-Components/FEN";
import {Chess} from "chess.js";
import {initialPositions,invertedPositionMap,positionMap} from "./utils";

// TO DO: implement useRef in FEN.js

function App() {

    // STATE HOOKS

    const [chess] = useState(new Chess()); //instantiates a new game from the chess.js library

    const [positions, setPositions] = useState(initialPositions); // array of the board squares and their adequate info

    const [fen, setFen] = useState(chess.fen()); // the fen string that translates into positions on the board

    const initialTurnIndex = chess.fen().indexOf(' ') + 1; // position of the letter that indicates who's turn it is in the initial FEN string

    const [turn, setTurn] = useState(fen[initialTurnIndex]); //self-explanatory, it handles the turns (w/b format) and the initial value is extracted from the FEN string

    const [selectedPiece, setSelectedPiece] = useState(null);// currently selected piece

    const [isSelected, setIsSelected] = useState(false); //is a piece currently selected

    // FUNCTIONS

    function fenToSquaresConvertor(fen, positions, setPositions) {
        let fenPositions = [...positions];
        let indexCounter = 0;

        for (let i = 0; fen[i] !== ' '; i++) {
            if (fen[i] !== '/') {
                if (!isNaN(fen[i])) {
                    for (let j = 0; j < parseInt(fen[i]); j++) {
                        fenPositions[indexCounter].type = 'empty';
                        fenPositions[indexCounter].isEmpty = true;
                        indexCounter += 1;
                    }
                } else {
                    switch (fen[i]) {
                        case 'p':
                            fenPositions[indexCounter].type = 'pawn_black'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter += 1;
                            break;
                        case 'r':
                            fenPositions[indexCounter].type = 'rook_black'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter += 1;
                            break;
                        case 'n':
                            fenPositions[indexCounter].type = 'knight_black'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter += 1;
                            break;
                        case 'b':
                            fenPositions[indexCounter].type = 'bishop_black'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter += 1;
                            break;
                        case 'q':
                            fenPositions[indexCounter].type = 'queen_black'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter += 1;
                            break;
                        case 'k':
                            fenPositions[indexCounter].type = 'king_black'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter += 1;
                            break;
                        case 'P':
                            fenPositions[indexCounter].type = 'pawn_white'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter += 1;
                            break;
                        case 'R':
                            fenPositions[indexCounter].type = 'rook_white'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter += 1;
                            break;
                        case 'N':
                            fenPositions[indexCounter].type = 'knight_white'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter += 1;
                            break;
                        case 'B':
                            fenPositions[indexCounter].type = 'bishop_white'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter += 1;
                            break;
                        case 'Q':
                            fenPositions[indexCounter].type = 'queen_white'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter += 1;
                            break;
                        case 'K':
                            fenPositions[indexCounter].type = 'king_white'
                            fenPositions[indexCounter].isEmpty = false;
                            indexCounter += 1;
                            break;
                    }
                }
            }
        }
        setPositions(fenPositions)
    } //convert FEN notation to squares on the board
    function promotionMoveFinder(letter,movesArray) {
        for(let i = 0; i < movesArray.length; i++) {
            if(movesArray[i].split('=')[1].includes(letter)){ //checks if the move after the "=" contains the letter. Ex. if (h8=B => B) contains the letter R. We check it this way because there might be an edge case where we have the letter in the square position, ex. b7, and we choose to promote to queen, but instead it promotes to bishop because of the B in the move itself
                return movesArray[i]
            }
        }
    } //when promoting a pawn, it searches for the correct promotion piece type move from the library

    function movePiece(x, y) {

        const previousSquareIndex = positions.findIndex((obj) => obj.x === selectedPiece.x && obj.y === selectedPiece.y) //finds the index of the square where the piece was located prior the move in order to highlight it

        const from = positionMap.get(selectedPiece.x) + selectedPiece.y;
        const to = positionMap.get(x) + y;
        const updatedPositions = positions;
        chess.move({from: from, to: to})
        if (turn === 'w') {
            setTurn('b')
        } else {
            setTurn('w')
        }
        setFen(chess.fen());
        setTurn(chess.turn());
        fenToSquaresConvertor(chess.fen(), positions, setPositions);

        setSelectedPiece(null);
        setIsSelected(false);
        for (let i = 0; i < positions.length; i++) {
            if(i === previousSquareIndex){ //highlights the previous square where the piece was located

                updatedPositions[i] = {...updatedPositions[i], isHighlighted:true}
            }
            else{
                updatedPositions[i] = {...updatedPositions[i], isLegal: false, isHighlighted: false}
            }
        }
        setPositions(updatedPositions)

        if (chess.isGameOver()) {
            console.log("GAME OVER")
        }

    }

    function getLegalMoves(x, y) {
        const square = positionMap.get(x) + y;
        const moves = chess.moves({square: square});
        const updatedPositions = [...positions];


        const legalMoveIndices = moves.map((move) => {
            const numberIndex = move.search(/\d/); // searches for the index of the number in the move string (Ex. index of 3 in Qb3)
            const letterIndex = numberIndex - 1;
            const xCoordinate = invertedPositionMap.get(move[letterIndex]); // convert alphabetic to numerical coordinate
            const yCoordinate = parseInt(move[numberIndex]);
            return positions.findIndex((obj) => obj.x === xCoordinate && obj.y === yCoordinate)
        })

        if (moves.includes('O-O') || moves.includes('0-0-0')) { //check if either king side or queen side castling is available
            if (moves.includes('O-O')) {
                legalMoveIndices.push(positions.findIndex((obj) => obj.x === x + 2 && obj.y === y)) //legalizes square for king-side castling
            }
            if (moves.includes('O-O-O')) {
                legalMoveIndices.push(positions.findIndex((obj) => obj.x === x - 2 && obj.y === y)) //legalizes square for queen-side castling
            }
        }
        for (let i = 0; i < positions.length; i++) {
            if (legalMoveIndices.includes(i)) {
                updatedPositions[i] = {...updatedPositions[i], isLegal: true}
            } else {
                updatedPositions[i] = {...updatedPositions[i], isLegal: false}
            }
        }
        setPositions(updatedPositions)
    } //returns the legal moves for a given piece (coordinates on the board) and sets them as legal


    function fenChangeHandler(newFen) {
        const updatedPositions = [...positions];

        fenToSquaresConvertor(newFen,positions, setPositions);
        setFen(newFen)
        chess.load(newFen)
        setTurn(newFen[newFen.indexOf(' ') + 1])

        setIsSelected(false);
        setSelectedPiece(null)
        for (let i = 0; i < positions.length; i++) {
            updatedPositions[i] = {...updatedPositions[i], isLegal: false}
        }
        setPositions(updatedPositions)
    } //updates the board with the new user-inputted fen and feeds the fen to the game engine



    function promotePawn(letter,x,y) {
        const square = positionMap.get(x) + y;
        const moves = chess.moves({square: square})
        chess.move(promotionMoveFinder(letter,moves))
        setFen(chess.fen());
        setTurn(chess.turn());
        fenToSquaresConvertor(chess.fen(), positions, setPositions);
        setSelectedPiece(null);
        setIsSelected(false);
    }

    function squareHighlighter(square){
        const squareIndex = positions.findIndex((obj) => obj.x === square.x && obj.y === square.y)
        const updatedPositions = [...positions];
        const setHighlight = updatedPositions[squareIndex].isHighlighted !== true;
        updatedPositions[squareIndex] = {...updatedPositions[squareIndex], isHighlighted: setHighlight }
        setPositions(updatedPositions)
    }


    return (
        <div className='App'>
            <Board
                squares={positions}
                onMovePiece={movePiece}
                promotePawn={promotePawn}
                turn={turn}
                setTurn={setTurn}
                selectedPiece={selectedPiece}
                isSelected={isSelected}
                setPiece={setSelectedPiece}
                setIsSelected={setIsSelected}
                getLegalMoves={getLegalMoves}
                squareHighlighter={squareHighlighter}
            />
            <Numbers/>
            <Letters/>
            <FEN fen={fen} onFenChange={fenChangeHandler}/>
        </div>
    );
}

export default App;