import './Board.css'
import Square from "./Square";
import {useState} from "react";

function Board (props) {

    const [selectedPiece, setSelectedPiece] = useState(null);

    const [isSelected, setIsSelected] = useState(false);

     const [squares, setSquares] = useState(props.squares)

    function generateFEN(squares) {
        let fen = "";
        let emptyCounter = 0;

        for (let i = 8; i > 0; i--) {
            for (let j = 1; j <= 8; j++) {
                let currentSquare = props.squares.find(
                    (p) => p.x === j && p.y === i
                );
                if (currentSquare.type === "empty") {
                    emptyCounter += 1;
                } else {
                    if (emptyCounter !== 0) {
                        fen += emptyCounter.toString();
                        emptyCounter = 0;
                    }
                    if (currentSquare.type[0] ==='k' && currentSquare.type[1] ==='n') {
                        fen += currentSquare.type[1].toUpperCase()
                    }
                    else{
                        fen += currentSquare.type[0].toUpperCase();
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
        console.log(fen);
    }

    function selectPiece(piece){
        setSelectedPiece(piece);
    }
    function isPieceSelected(isTrue) {
       setIsSelected(isTrue);
    }

    function movePiece(x,y) {
        const moveTo = squares.findIndex((obj) => obj.x === x && obj.y === y);
        const removeFrom = squares.findIndex((obj) => obj.x === selectedPiece.x && obj.y === selectedPiece.y);

        const updatedSquares = [...squares];
        updatedSquares[moveTo] = { ...updatedSquares[moveTo], type: selectedPiece.type };
        updatedSquares[removeFrom] = { ...updatedSquares[removeFrom], type: 'empty' };

        setSquares(updatedSquares);
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
                    squares={squares}
                    onSelectPiece={selectPiece}
                    onSetIsPieceSelected={isPieceSelected}
                    onMovePiece={movePiece}
                    isSquareDark={square.isDark}
                    selectedPiece={selectedPiece}
                />
            )}
        </div>
    );
}
export default Board;