import React, { useState } from 'react';
import './Square.css';
import Piece from './Piece';
import PawnPromotion from './PawnPromotion';

function Square(props) {
  const currentTurn = props.turn === 'w' ? 'white' : 'black';
  const piece = props.squares.find((p) => p.x === props.x && p.y === props.y);
  const pieceColor = piece.type.split('_')[1];
  const isSquareEmpty = !piece || piece.type === 'empty';
  const isAPieceSelected = props.isSelected;
  const isHighlighted = piece.isHighlighted;

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

  function hidePawnPromotion() {
    setShowPawnPromotion(false);
  }

  function getLegalMoves(piece) {
    props.getLegalMoves(piece.x, piece.y);
  }

  function squareHighlighter(e) {
    e.preventDefault();
    props.squareHighlighter(piece);
  }

  function squareClickHandler() {
    if (piece.type === 'pawn' && ((currentTurn === 'white' && piece.y === 6) || (currentTurn === 'black' && piece.y === 1))) {
        // Display pawn promotion options
        setShowPawnPromotion(true);
      } 

    if (!isSquareEmpty) {
      if (isAPieceSelected) {
        if (currentTurn === pieceColor) {
          selectPieceHandler(piece);
          setIsPieceSelectedHandler(true);
          getLegalMoves(piece);
        } else if (props.isLegal) {
          movePiece(piece.x, piece.y);
        }
      } else {
        if (currentTurn === pieceColor) {
          selectPieceHandler(piece);
          setIsPieceSelectedHandler(true);
          getLegalMoves(piece);
        }
      }
    } else {
      if (props.isLegal) {
        movePiece(piece.x, piece.y);
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
        props.selectedPiece.y === parseInt(props.y) ||
        isHighlighted
          ? 'Highlighted'
          : ''
      }`}
      onClick={squareClickHandler}
      onContextMenu={squareHighlighter}
    >
      {!isSquareEmpty && <Piece type={piece.type} />}
      {showPawnPromotion && (
        <PawnPromotion
          color={pieceColor}
          square={piece}
          promotePawn={(pieceType) => {
            // Implement your pawn promotion logic here
            // You can pass the pieceType to your game logic for pawn promotion
            // For example: 
            props.promotePawn(pieceType, pieceColor, piece.x, piece.y);
            hidePawnPromotion();
          }}
        //   hidePawnPromotion={hidePawnPromotion}
        />
      )}
    </div>
  );
}

export default Square;