import './Square.css';
import Piece from './Piece';

function Square(props) {

    const isSquareDark = props.isSquareDark;

    const piece = props.positions.find(
        (p) => p.x === parseInt(props.x) && p.y === parseInt(props.y)
    );
    const isEmpty = !piece || piece.type === 'empty';


    function SquareClickHandler() {
        if (!isEmpty) {
            if (!props.isPieceSelected) {
                props.onSelectPiece(piece);
                props.onIsPieceSelected(true);
            } else {
                props.onMovePiece(props.selectedPiece,props.x, props.y);
                props.onIsPieceSelected(false);
            }
        } else {
            if (props.isPieceSelected) {
                props.onMovePiece(props.selectedPiece,props.x, props.y);
                props.onIsPieceSelected(false);
            }
        }
    }

    return (
        <div
            className={`Square ${isSquareDark ? 'Dark' : 'Light'}`}
            onClick={SquareClickHandler}
        >
            {!isEmpty && <Piece type={piece.type} />}
        </div>
    );
}

export default Square;
