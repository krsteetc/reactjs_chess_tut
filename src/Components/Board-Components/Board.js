import './Board.css'
import Square from "./Square";
import {useState} from "react";
import {Chess} from "chess.js";

function Board (props) {

    const currentLegalMoves = props.currentLegalMoves;

    const turn = props.turn;
    const selectedPiece = props.selectedPiece;
    const isSelected = props.isSelected;


    function selectPiece(piece){
        props.setPiece(piece);
    }
    function isPieceSelected(isTrue) {
       props.setIsSelected(isTrue);
    }
    function movePiece(x,y) {

        props.onMovePiece(x,y,selectedPiece)

        // const from = positionMap.get(selectedPiece.x) + selectedPiece.y;
        // const to = positionMap.get(x) + y;
        // chess.move({from:from, to:to})
        //
        // const moveTo = props.squares.findIndex((obj) => obj.x === x && obj.y === y);
        // const removeFrom = props.squares.findIndex((obj) => obj.x === selectedPiece.x && obj.y === selectedPiece.y);
        // const updatedSquares = [...props.squares];
        // updatedSquares[moveTo] = { ...updatedSquares[moveTo], type: selectedPiece.type, isEmpty: false };
        // updatedSquares[removeFrom] = { ...updatedSquares[removeFrom], type: 'empty', isEmpty: true };
        // for (let i = 0; i<updatedSquares.length; i++){
        //     updatedSquares[i] = {...updatedSquares[i], isLegal: false};
        // }
        // props.onMovePiece(updatedSquares);
        //
        // if(turn === 'white'){
        //
        //     setTurn('black')
        // }
        // else {
        //     chess.turn()
        //     setTurn('white')
        // }
    }


    function setLegalMoves(piece, currentLegalMoves) {
        const legalMoves = props.getLegalMoves(piece.x, piece.y);
        props.onSetLegalMoves(piece, legalMoves)
    }



        //     for (let index in updatedLegalMoves) {
        //         const square = updatedLegalMoves[index];
        //         if (square.type.split('_')[1] === 'white'){
        //             updatedWhiteLegalMoves.push(square)
        //             }
        //         else {
        //             updatedBlackLegalMoves.push(square)
        //         }
        //     }
        //
        //     setWhiteLegalMoves(updatedWhiteLegalMoves);
        //     setBlackLegalMoves(updatedBlackLegalMoves);
        //
        //
        //     for (let i = 0; i<updatedLegalMoves.length; i++){
        //         updatedLegalMoves[i] = {...updatedLegalMoves[i], isLegal: false};
        //     }
        //
        //     switch (figure) {
        //         case 'pawn':
        //             if (color === 'white') {
        //                 if (piece.y === 2) {
        //                     let endFlag = true;
        //                     for (let i = 1; i <= 2; i++) {
        //                         const setLegal = props.squares.findIndex(obj => obj.x === piece.x && obj.y === i + piece.y);
        //                         if (props.squares[setLegal].isEmpty){
        //                             updatedLegalMoves[setLegal] = { ...updatedLegalMoves[setLegal], isLegal: true };
        //                             endFlag = false;
        //                         }
        //                         if (endFlag === true)
        //                             break;
        //                     }
        //                 } else {
        //                     const setLegal = props.squares.findIndex(obj => obj.x === piece.x && obj.y === piece.y + 1 && obj.isEmpty === true);
        //                     updatedLegalMoves[setLegal] = { ...updatedLegalMoves[setLegal], isLegal: true };
        //                 }
        //
        //                 const attackLeft = props.squares.findIndex(obj => obj.x === piece.x - 1 && obj.y === piece.y + 1 && !obj.isEmpty);
        //                 const attackRight = props.squares.findIndex(obj => obj.x === piece.x + 1 && obj.y === piece.y + 1 && !obj.isEmpty);
        //
        //                 if (attackLeft !== -1 && props.squares[attackLeft].type.split('_')[1] !== 'white') {
        //                     updatedLegalMoves[attackLeft] = { ...updatedLegalMoves[attackLeft], isLegal: true };
        //                 }
        //                 if (attackRight !== -1 && props.squares[attackRight].type.split('_')[1] !== 'white') {
        //                     updatedLegalMoves[attackRight] = { ...updatedLegalMoves[attackRight], isLegal: true };
        //                 }
        //             } else {
        //                 if (piece.y === 7) {
        //                     let endFlag = true;
        //                     for (let i = 1; i <= 2; i++) {
        //                         const setLegal = props.squares.findIndex(obj => obj.x === piece.x && obj.y === piece.y - i);
        //                         if (props.squares[setLegal].isEmpty){
        //                             updatedLegalMoves[setLegal] = { ...updatedLegalMoves[setLegal], isLegal: true };
        //                             endFlag = false;
        //                         }
        //                         if (endFlag === true)
        //                             break;
        //                     }
        //                 } else {
        //                     const setLegal = props.squares.findIndex(obj => obj.x === piece.x && obj.y === piece.y - 1 && obj.isEmpty === true);
        //                     updatedLegalMoves[setLegal] = { ...updatedLegalMoves[setLegal], isLegal: true };
        //                 }
        //                 const attackLeft = props.squares.findIndex(obj => obj.x === piece.x - 1 && obj.y === piece.y - 1 && !obj.isEmpty);
        //                 const attackRight = props.squares.findIndex(obj => obj.x === piece.x + 1 && obj.y === piece.y - 1 && !obj.isEmpty);
        //
        //                 if (attackLeft !== -1 && props.squares[attackLeft].type.split('_')[1] !== 'black') {
        //                     updatedLegalMoves[attackLeft] = { ...updatedLegalMoves[attackLeft], isLegal: true };
        //                 }
        //                 if (attackRight !== -1 && props.squares[attackRight].type.split('_')[1] !== 'black') {
        //                     updatedLegalMoves[attackRight] = { ...updatedLegalMoves[attackRight], isLegal: true };
        //                 }
        //             }
        //             break;
        //
        //         case 'rook':
        //             const maxUp = 8 - piece.y + 1;
        //             const maxDown = 8 - maxUp;
        //             const maxRight = 8 - piece.x + 1;
        //             const maxLeft = 8 - maxRight;
        //
        //             for (let i = 1 ; i < maxUp ; i++ ) {
        //                 let endFlag = true;
        //                 const up = props.squares.findIndex((obj) => obj.x === piece.x && obj.y === piece.y + i);
        //                 if (props.squares[up].isEmpty) {
        //                     updatedLegalMoves[up] = {...updatedLegalMoves[up], isLegal: true};
        //                     endFlag = false;
        //                 } else {
        //                     if (color !== props.squares[up].type.split('_')[1]) {
        //                         updatedLegalMoves[up] = {...updatedLegalMoves[up], isLegal: true};
        //                     }
        //                 }
        //                 if (endFlag === true)
        //                     break;
        //             }
        //             for (let i = 1 ; i < maxDown ; i++ ){
        //                 let endFlag = true;
        //                 const down = props.squares.findIndex((obj) => obj.x === piece.x && obj.y === piece.y - i);
        //                 if (props.squares[down].isEmpty){
        //                     updatedLegalMoves[down] = { ...updatedLegalMoves[down], isLegal: true };
        //                     endFlag = false;
        //                 }
        //                 else {
        //                     if (color !== props.squares[down].type.split('_')[1]){
        //                         updatedLegalMoves[down] = { ...updatedLegalMoves[down], isLegal: true };
        //                     }
        //                 }
        //                 if (endFlag === true)
        //                     break;
        //             }
        //
        //             for (let i = 1 ; i < maxRight ; i++ ){
        //                 let endFlag = true;
        //                 const right = props.squares.findIndex((obj) => obj.x === piece.x + i && obj.y === piece.y);
        //                 if (props.squares[right].isEmpty){
        //                     updatedLegalMoves[right] = { ...updatedLegalMoves[right], isLegal: true };
        //                     endFlag = false;
        //                 }
        //                 else {
        //                     if (color !== props.squares[right].type.split('_')[1]){
        //                         updatedLegalMoves[right] = { ...updatedLegalMoves[right], isLegal: true };
        //                     }
        //                 }
        //                 if (endFlag === true)
        //                     break;
        //             }
        //
        //             for (let i = 1 ; i < maxLeft ; i++ ){
        //                 let endFlag = true;
        //                 const left = props.squares.findIndex((obj) => obj.x === piece.x - i && obj.y === piece.y);
        //                 if (props.squares[left].isEmpty){
        //                     updatedLegalMoves[left] = { ...updatedLegalMoves[left], isLegal: true };
        //                     endFlag = false;
        //                 }
        //                 else {
        //                     if (color !== props.squares[left].type.split('_')[1]){
        //                         updatedLegalMoves[left] = { ...updatedLegalMoves[left], isLegal: true };
        //                     }
        //                 }
        //                 if (endFlag === true)
        //                     break;
        //             }
        //
        //
        //
        //
        //
        //             break;
        //         case 'bishop':
        //             for (let i = 0; i < updatedLegalMoves.length; i++) {
        //                 updatedLegalMoves[i] = { ...updatedLegalMoves[i], isLegal: false };
        //             }
        //
        //             const directions = [
        //                 { x: -1, y: 1 },
        //                 { x: 1, y: 1 },
        //                 { x: -1, y: -1 },
        //                 { x: 1, y: -1 }
        //             ];
        //
        //             for (let dir of directions) {
        //                 let newX = piece.x + dir.x;
        //                 let newY = piece.y + dir.y;
        //
        //                 while (newX >= 1 && newX <= 8 && newY >= 1 && newY <= 8) {
        //                     const index = props.squares.findIndex(obj => obj.x === newX && obj.y === newY);
        //                     const square = props.squares[index];
        //
        //                     if (square.isEmpty) {
        //                         updatedLegalMoves[index] = { ...updatedLegalMoves[index], isLegal: true };
        //                     }
        //                     else if (square.type.split('_')[1] !== color) {
        //                         updatedLegalMoves[index] = { ...updatedLegalMoves[index], isLegal: true };
        //                         break;
        //                     }
        //                     else {
        //                         break;
        //                     }
        //
        //                     newX += dir.x;
        //                     newY += dir.y;
        //                 }
        //             }
        //
        //             props.onSetLegalMoves(updatedLegalMoves);
        //             break;
        //         //kraj na bishop
        //
        //         case 'queen':
        //             let queenDirections = [
        //                 { x: 0, y: 1 }, // Top
        //                 { x: 0, y: -1 }, // Bottom
        //                 { x: -1, y: 0 }, // Left
        //                 { x: 1, y: 0 }, // Right
        //                 { x: -1, y: 1 }, // Top-left
        //                 { x: 1, y: 1 }, // Top-right
        //                 { x: -1, y: -1 }, // Bottom-left
        //                 { x: 1, y: -1 }, // Bottom-right
        //               ];
        //
        //             for (let dir of queenDirections) {
        //               let newX = piece.x + dir.x;
        //               let newY = piece.y + dir.y;
        //
        //               while (newX >= 1 && newX <= 8 && newY >= 1 && newY <= 8) {
        //                 const index = props.squares.findIndex(obj => obj.x === newX && obj.y === newY);
        //                 const square = props.squares[index];
        //
        //                 if (square.isEmpty) {
        //                   updatedLegalMoves[index] = { ...updatedLegalMoves[index], isLegal: true };
        //                 }
        //                 else if (square.type.split('_')[1] !== color) {
        //                   updatedLegalMoves[index] = { ...updatedLegalMoves[index], isLegal: true };
        //                   break;
        //                 }
        //                 else {
        //                   break;
        //                 }
        //
        //                 newX += dir.x;
        //                 newY += dir.y;
        //               }
        //             }
        //
        //             props.onSetLegalMoves(updatedLegalMoves);
        //             break;
        //             //kraj na kralica
        //
        //             case 'knight':
        //                 const knightMoves = [
        //                   { x: -2, y: -1 },
        //                   { x: -2, y: 1 },
        //                   { x: -1, y: -2 },
        //                   { x: -1, y: 2 },
        //                   { x: 1, y: -2 },
        //                   { x: 1, y: 2 },
        //                   { x: 2, y: -1 },
        //                   { x: 2, y: 1 },
        //                 ];
        //
        //                 for (let move of knightMoves) {
        //                   const newX = piece.x + move.x;
        //                   const newY = piece.y + move.y;
        //
        //                   if (newX >= 1 && newX <= 8 && newY >= 1 && newY <= 8) {
        //                     const index = props.squares.findIndex(obj => obj.x === newX && obj.y === newY);
        //                     const square = props.squares[index];
        //
        //                     if (square.isEmpty || square.type.split('_')[1] !== color) {
        //                       updatedLegalMoves[index] = { ...updatedLegalMoves[index], isLegal: true };
        //                     }
        //                   }
        //                 }
        //
        //                 break;
        //             //kraj na konj
        //
        //             case 'king':
        //                 const kingMoves = [
        //                     { x: -1, y: 1 }, // Top-left
        //                     { x: 0, y: 1 }, // Top
        //                     { x: 1, y: 1 }, // Top-right
        //                     { x: -1, y: 0 }, // Left
        //                     { x: 1, y: 0 }, // Right
        //                     { x: -1, y: -1 }, // Bottom-left
        //                     { x: 0, y: -1 }, // Bottom
        //                     { x: 1, y: -1 }, // Bottom-right
        //                 ];
        //
        //                 for (let move of kingMoves) {
        //                     const newX = piece.x + move.x;
        //                     const newY = piece.y + move.y;
        //
        //                     if (newX >= 1 && newX <= 8 && newY >= 1 && newY <= 8) {
        //                         const index = props.squares.findIndex(obj => obj.x === newX && obj.y === newY);
        //                         const square = props.squares[index];
        //
        //                         if (color === 'white'){
        //                             if (!whiteLegalMoves.includes(square)) {
        //                                 if (square.isEmpty) {
        //                                     updatedLegalMoves[index] = { ...updatedLegalMoves[index], isLegal: true };
        //                                 }
        //                                 if (square.type.split('_')[1] !== color){
        //                                     updatedLegalMoves[index] = { ...updatedLegalMoves[index], isLegal: true }
        //                                 }
        //                             }
        //                         }
        //                         else {
        //                             if (!blackLegalMoves.includes(square)) {
        //                                 if (square.isEmpty) {
        //                                     updatedLegalMoves[index] = { ...updatedLegalMoves[index], isLegal: true };
        //                                 }
        //                                 if (square.type.split('_')[1] !== color){
        //                                     updatedLegalMoves[index] = { ...updatedLegalMoves[index], isLegal: true }
        //                                 }
        //                             }
        //                         }
        //                     }
        //                 }
        //
        //                 props.onSetLegalMoves(updatedLegalMoves);
        //                 break;
        //
        //             //kraj na kral
        //
        //
        //         default:
        //             break;
        //     }
        //
        //     props.onSetLegalMoves(updatedLegalMoves);


    const [whiteLegalMoves, setWhiteLegalMoves] = useState(null);

    const [blackLegalMoves, setBlackLegalMoves] = useState(null);




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
                    setTurn={props.setTurn}
                    isLegal={square.isLegal}
                    onSetLegalMoves={setLegalMoves}
                    promotePawn={props.promotePawn}
                    getLegalMoves={props.getLegalMoves}
                    currentLegalMoves={currentLegalMoves}
                />
            )}
        </div>
    );
}
export default Board;