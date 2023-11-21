import React, {useState} from 'react';
import './Square.css';
import Piece from './Piece';
import PawnPromotion from './PawnPromotion';

function Square(props) {
  const selectedPiece = props.selectedPiece
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

  function hidePawnPromotion () {
    console.log('triggered')
    setShowPawnPromotion(false)
  }

  function setIsPieceSelectedHandler(isTrue) {
    props.onSetIsPieceSelected(isTrue);
  }

  function movePiece(x, y) {
    props.onMovePiece(x, y);
  }

  function getLegalMoves(piece) {
    props.getLegalMoves(piece.x, piece.y);
  }

  function squareHighlighter(e) {
    e.preventDefault();
    props.squareHighlighter(piece);
  }


  function squareClickHandler() {
    if(selectedPiece){
      if (selectedPiece.type.split('_')[0] === 'pawn' && ((currentTurn === 'white' && piece.y === 8) || (currentTurn === 'black' && piece.y === 1))) { // promotion edge case handling
        setShowPawnPromotion(true);
      }
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
          color={currentTurn}
          square={piece}
          promotePawn={props.promotePawn}
          hidePawnPromotion={hidePawnPromotion}
        />
      )}
    </div>
  );
}

export default Square;