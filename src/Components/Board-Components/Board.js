import './Board.css'
import Square from "./Square";
import {useState} from "react";

function Board (props) {


    const verticalAxis = ['8','7','6','5','4','3','2','1'] ;
    const horizontalAxis = ['1','2','3','4','5','6','7','8'];

    const [selectedPiece, setSelectedPiece] = useState(null);

    const [isPieceSelected,setIsPieceSelected] = useState(false);

    const [positions, setPositions] = useState(props.positions)

    function selectPiece(piece){
        setSelectedPiece(piece)
        console.log("selectPiece e ova")
    }

    function isSelected (isTrue) {
        setIsPieceSelected(isTrue);
        console.log("isSelected e ova")
        // Square.style.background = "green";
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
    }

    // function selectBackground() {
    //     if(isSelected) {`{background = "green"}`}
    // }

    return (
        <div className="board-card">

            {horizontalAxis.map((letter) =>
                verticalAxis.map((number) =>
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
                    style = {{
                        backgroundColor: isSelected ? 'red' : 'blue',
                    }}
                    />
                )
            )}
        </div>

    );
}
export default Board;