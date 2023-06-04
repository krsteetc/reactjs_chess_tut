import './Square.css';
import Piece from './Piece';

function Square(props) {

    const piece = props.squares.find(
        (p) => p.x === props.x && p.y === props.y
    );
    const isEmpty = !piece || piece.type === 'empty';
    function selectPieceHandler (piece) {
        props.onSelectPiece(piece)
    }
    function SetIsPieceSelectedHandler (isTrue) {
        props.onSetIsPieceSelected(isTrue)
    }
    function movePiece (x,y) {
        props.onMovePiece(x,y)
    }



    function SquareClickHandler() {
        if (!isEmpty) {
            if (!props.isSelected) {
                if(props.turn ===  piece.type.split('_')[1]){
                    selectPieceHandler(piece);
                    SetIsPieceSelectedHandler(true);
                    props.onSetLegalMoves(piece)
                }
            } else {
                if (props.selectedPiece.type.split('_')[1] === piece.type.split('_')[1]) {
                    selectPieceHandler(piece);
                    SetIsPieceSelectedHandler(true);
                    props.onSetLegalMoves(piece)
                }
                if (props.isLegal){
                    movePiece(props.x, props.y);
                    selectPieceHandler(null);
                    SetIsPieceSelectedHandler(false);
                }
            }
        } else {
            if (props.isSelected) {
                if (props.isLegal){
                    movePiece(props.x, props.y);
                    selectPieceHandler(null);
                    SetIsPieceSelectedHandler(false);
                }
            }
        }
    }

    return (
        <div
            className={`Square ${props.isSquareDark ? "Dark" : "Light" } ${props.isLegal ? 'Legal' : ''}
            ${props.isLegal && !props.isEmpty ? 'Attacked' : ''}
             ${
                props.selectedPiece &&
                props.selectedPiece.x === parseInt(props.x) &&
                props.selectedPiece.y === parseInt(props.y)
                    ? "Highlighted"
                    : ""
            }`}
            onClick={SquareClickHandler}
        >
            {!isEmpty && <Piece type={piece.type} />}
        </div>
    );
}
export default Square;
