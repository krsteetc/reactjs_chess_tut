import './Board.css'
import Square from "./Square";
import {useState} from "react";

function Board (props) {

    const [turn, setTurn] = useState('white');

    const [selectedPiece, setSelectedPiece] = useState(null);

    const [isSelected, setIsSelected] = useState(false);

    function selectPiece(piece){
        setSelectedPiece(piece);
    }
    function isPieceSelected(isTrue) {
       setIsSelected(isTrue);
    }
    function movePiece(x,y) {
        const moveTo = props.squares.findIndex((obj) => obj.x === x && obj.y === y);
        const removeFrom = props.squares.findIndex((obj) => obj.x === selectedPiece.x && obj.y === selectedPiece.y);

        const updatedSquares = [...props.squares];
        updatedSquares[moveTo] = { ...updatedSquares[moveTo], type: selectedPiece.type, isEmpty: false };
        updatedSquares[removeFrom] = { ...updatedSquares[removeFrom], type: 'empty', isEmpty: true };
        for (let i = 0; i<updatedSquares.length; i++){
            updatedSquares[i] = {...updatedSquares[i], isLegal: false};
        }
        props.onMovePiece(updatedSquares);

        if(turn === 'white'){
            setTurn('black')
        }
        else {
            setTurn('white')
        }
    }

    function setLegalMoves(piece) {
        const figure = piece.type.split('_')[0];
        const color = piece.type.split('_')[1];
        const updatedLegalMoves = [...props.squares];

        for (let i = 0; i<updatedLegalMoves.length; i++){
            updatedLegalMoves[i] = {...updatedLegalMoves[i], isLegal: false};
        }

        switch (figure) {
            case 'pawn':
                if (color === 'white') {
                    if (piece.y === 2) {
                        for (let i = 1; i <= 2; i++) {
                            const setLegal = props.squares.findIndex(obj => obj.x === piece.x && obj.y === i + piece.y && obj.isEmpty === true);
                            updatedLegalMoves[setLegal] = { ...updatedLegalMoves[setLegal], isLegal: true };
                        }
                    } else {
                        const setLegal = props.squares.findIndex(obj => obj.x === piece.x && obj.y === piece.y + 1 && obj.isEmpty === true);
                        updatedLegalMoves[setLegal] = { ...updatedLegalMoves[setLegal], isLegal: true };
                    }

                    const attackLeft = props.squares.findIndex(obj => obj.x === piece.x - 1 && obj.y === piece.y + 1 && !obj.isEmpty);
                    const attackRight = props.squares.findIndex(obj => obj.x === piece.x + 1 && obj.y === piece.y + 1 && !obj.isEmpty);

                    if (attackLeft !== -1 && props.squares[attackLeft].type.split('_')[1] !== 'white') {
                        updatedLegalMoves[attackLeft] = { ...updatedLegalMoves[attackLeft], isLegal: true };
                    }
                    if (attackRight !== -1 && props.squares[attackRight].type.split('_')[1] !== 'white') {
                        updatedLegalMoves[attackRight] = { ...updatedLegalMoves[attackRight], isLegal: true };
                    }
                } else {
                    if (piece.y === 7) {
                        for (let i = 1; i <= 2; i++) {
                            const setLegal = props.squares.findIndex(obj => obj.x === piece.x && obj.y === piece.y - i && obj.isEmpty === true);
                            updatedLegalMoves[setLegal] = { ...updatedLegalMoves[setLegal], isLegal: true };
                        }
                    } else {
                        const setLegal = props.squares.findIndex(obj => obj.x === piece.x && obj.y === piece.y - 1 && obj.isEmpty === true);
                        updatedLegalMoves[setLegal] = { ...updatedLegalMoves[setLegal], isLegal: true };
                    }
                    const attackLeft = props.squares.findIndex(obj => obj.x === piece.x - 1 && obj.y === piece.y - 1 && !obj.isEmpty);
                    const attackRight = props.squares.findIndex(obj => obj.x === piece.x + 1 && obj.y === piece.y - 1 && !obj.isEmpty);

                    if (attackLeft !== -1 && props.squares[attackLeft].type.split('_')[1] !== 'black') {
                        updatedLegalMoves[attackLeft] = { ...updatedLegalMoves[attackLeft], isLegal: true };
                    }
                    if (attackRight !== -1 && props.squares[attackRight].type.split('_')[1] !== 'black') {
                        updatedLegalMoves[attackRight] = { ...updatedLegalMoves[attackRight], isLegal: true };
                    }
                }
                break;
            // Cases za ostanatite choechinja

            default:
                break;
        }

        props.onSetLegalMoves(updatedLegalMoves);
    }


    return (
        <div className="board-card">
            {props.squares.map(
                (square) => <Square
                    x={square.x}
                    y={square.y}
                    type={square.type}
                    isEmpty={square.isEmpty}
                    isSelected={isSelected}
                    key={`${square.x}-${square.y}`}
                    squares={props.squares}
                    onSelectPiece={selectPiece}
                    onSetIsPieceSelected={isPieceSelected}
                    onMovePiece={movePiece}
                    isSquareDark={square.isDark}
                    selectedPiece={selectedPiece}
                    turn={turn}
                    setTurn={setTurn}
                    isLegal={square.isLegal}
                    onSetLegalMoves={setLegalMoves}
                />
            )}
        </div>
    );
}
export default Board;