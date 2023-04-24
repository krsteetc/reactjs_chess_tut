import './Square.css'
import Piece from "./Piece";

function Square (props) {

    const isDarkSquare = props.isDarkSquare;

    const piece = props.positions.find(
        (p) => p.x === parseInt(props.x) && p.y === parseInt(props.y)
    );
    const isEmpty = !piece || piece.type === 'empty';

    return (
        <div className={`Square ${isDarkSquare ? 'Dark' : 'Light'}`}>
            {!isEmpty && <Piece type={piece.type} />}
        </div>
    );
}

export default Square;