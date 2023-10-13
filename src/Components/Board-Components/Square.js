import React, { useState } from 'react';
import './Square.css';
import Piece from './Piece';
import PawnPromotion from './PawnPromotion';

function Square(props) {


    const piece = props.squares.find((p) => p.x === props.x && p.y === props.y);
    const isEmpty = !piece || piece.type === 'empty';

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



    function squareClickHandler() {

        if (!isEmpty) {
            if (!props.isSelected) {
                if (props.turn === piece.type.split('_')[1][0]) {
                    selectPieceHandler(piece);
                    setIsPieceSelectedHandler(true);
                    props.getLegalMoves(piece.x, piece.y)
                    props.onSetLegalMoves(piece, props.currentLegalMoves);
                }
            } else {
                if (props.selectedPiece.type.split('_')[1] === piece.type.split('_')[1][0]) {
                    selectPieceHandler(piece);
                    setIsPieceSelectedHandler(true);
                    props.onSetLegalMoves(piece, props.currentLegalMoves);

                }
                    movePiece(props.x, props.y);
                    selectPieceHandler(null);
                    setIsPieceSelectedHandler(false);
                    if (
                        (props.selectedPiece.type.split('_')[0] === 'pawn' &&
                            props.y === 1) ||
                        props.selectedPiece.type.split('_')[0] === 'pawn' && props.y === 8
                    ) {
                        setShowPawnPromotion(true);
                    }

            }
        } else {
            if (props.isSelected) {
                    movePiece(props.x, props.y);
                    selectPieceHandler(null);
                    setIsPieceSelectedHandler(false);
                    if (
                        (props.selectedPiece.type.split('_')[0] === 'pawn' &&
                            props.y === 1) ||
                        props.selectedPiece.type.split('_')[0] === 'pawn' && props.y === 8
                    ) {
                        setShowPawnPromotion(true);
                    }
            }
        }
    }


    function hidePawnPromotion (){
        setShowPawnPromotion(false);
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
            {!isEmpty && <Piece type={piece.type} />}
            {showPawnPromotion && <PawnPromotion color={piece.type.split('_')[1]} square={piece} promotePawn={props.promotePawn} hidePawnPromotion={hidePawnPromotion} />}
        </div>
    );
}

export default Square;
