import './Board.css'
import Square from "./Square";
import {useState} from "react";

function Board (props) {

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
        updatedSquares[moveTo] = { ...updatedSquares[moveTo], type: selectedPiece.type };
        updatedSquares[removeFrom] = { ...updatedSquares[removeFrom], type: 'empty' };

        props.onMovePiece(updatedSquares);
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
                />
            )}
        </div>
    );
}
export default Board;