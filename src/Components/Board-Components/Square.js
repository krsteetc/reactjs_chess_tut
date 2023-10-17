import React, { useState } from 'react';
import './Square.css';
import Piece from './Piece';
import PawnPromotion from './PawnPromotion';

function Square(props) {

    const currentTurn = props.turn === 'w' ? 'white' : 'black' ;
    const piece = props.squares.find((p) => p.x === props.x && p.y === props.y);
    const pieceColor = piece.type.split('_')[1]
    const isSquareEmpty = !piece || piece.type === 'empty';
    const isAPieceSelected = props.isSelected;
    // const selectedPieceColor = selectedPiece.type.split('_')[1]; fix this

    const [showPawnPromotion, setShowPawnPromotion] = useState(false);

    function selectPieceHandler(piece) {
        props.onSelectPiece(piece);
    }

    function setIsPieceSelectedHandler(isTrue) {
        props.onSetIsPieceSelected(isTrue);
    }

    function movePiece(x, y) {
        props.onMovePiece(x, y);
    }

    function hidePawnPromotion (){
        setShowPawnPromotion(false);
    }

    function getLegalMoves (piece) {
        props.getLegalMoves(piece.x, piece.y)
    }

    function squareClickHandler() {
        if(!isSquareEmpty){
            if(isAPieceSelected){
                if(currentTurn === pieceColor){
                    selectPieceHandler(piece);
                    setIsPieceSelectedHandler(true);
                    getLegalMoves(piece);
                }
                else if(props.isLegal){
                    movePiece(piece.x, piece.y)
                }
            }
            else{
                if(currentTurn === pieceColor){
                    selectPieceHandler(piece);
                    setIsPieceSelectedHandler(true)
                    getLegalMoves(piece)
                }
            }
        }
        else{
            if(props.isLegal){
                movePiece(piece.x, piece.y)
            }
        }
    }


    return (
        <div
            className={`Square ${
                props.isSquareDark ? 'Dark' : 'Light'
            } ${props.isLegal ? 'Legal' : ''} ${
                props.isLegal && !props.isEmpty ? 'Attacked' : ''
            } ${
                props.selectedPiece &&
                props.selectedPiece.x === parseInt(props.x) &&
                props.selectedPiece.y === parseInt(props.y)
                    ? 'Highlighted'
                    : ''
            }`}
            onClick={squareClickHandler}
        >
            {!isSquareEmpty && <Piece type={piece.type} />}
            {showPawnPromotion && <PawnPromotion color={piece.type.split('_')[1]} square={piece} promotePawn={props.promotePawn} hidePawnPromotion={hidePawnPromotion} />}
        </div>
    );
}

export default Square;
