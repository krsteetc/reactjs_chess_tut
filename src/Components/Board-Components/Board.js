import './Board.css'
import Square from "./Square";
import {useState} from "react";

function Board (props) {

    const verticalAxis = ['8','7','6','5','4','3','2','1'] ;

    const horizontalAxis = ['1','2','3','4','5','6','7','8'];

    const [selectedPiece, setSelectedPiece] = useState(null);

    const [isPieceSelected,setIsPieceSelected] = useState(false);

    const [positions, setPositions] = useState(props.positions)

    function generateFEN(positions) {
        let fen = "";
        let emptyCounter = 0;

        for (let i = 8; i > 0; i--) {
            for (let j = 1; j <= 8; j++) {
                let currentSquare = positions.find(
                    (p) => p.x === j && p.y === i
                );
                if (currentSquare.type === "empty") {
                    emptyCounter += 1;
                } else {
                    if (emptyCounter !== 0) {
                        fen += emptyCounter.toString();
                        emptyCounter = 0;
                    }
                    fen += currentSquare.type[0].toUpperCase();
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
    function isSelected (isTrue) {
        setIsPieceSelected(isTrue);
    }
    function movePiece(piece, x, y) {
        const moveTo = positions.findIndex(
            (obj) => obj.x === parseInt(x) && obj.y === parseInt(y)
        );
        const removeFrom = positions.findIndex(
            (obj) => obj.x === parseInt(piece.x) && obj.y === parseInt(piece.y)
        );
        const updatedPositions = [...positions];
        updatedPositions[removeFrom] = { ...updatedPositions[removeFrom], type: "empty" };
        updatedPositions[moveTo] = { ...updatedPositions[moveTo], type: piece.type };
        setPositions(updatedPositions);
        generateFEN(updatedPositions)
    }

    return (
        <div className="board-card">
            {verticalAxis.map((letter) =>
                horizontalAxis.map((number) =>
                    <Square
                    x={number}
                    y={letter}
                    isSquareDark={props.isSquareDark(letter, number)}
                    key={`${letter}-${number}`}
                    positions={positions}
                    onSelectPiece={selectPiece}
                    onIsPieceSelected={isSelected}
                    selectedPiece={selectedPiece}
                    isPieceSelected={isPieceSelected}
                    onMovePiece={movePiece}
                    />
                )
            )}
        </div>
    );
}
export default Board;