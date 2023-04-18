import './Square.css'
import Piece from "./Piece";

function Square (props) {

    const isDark = props.isDark;

    const piece = props.positions.find(
        (p) => p.x === parseInt(props.x) && p.y === parseInt(props.y)
    );
    const isEmpty = !piece || piece.type === 'empty';

    return (
        <div className={`Square ${isDark ? 'Dark' : 'Light'}`}>
            {!isEmpty && <Piece color={piece.color} type={piece.type} />}
        </div>
    );
}

export default Square;