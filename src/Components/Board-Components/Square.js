import './Square.css'
import Piece from "./Piece";

function Square (props) {

    const isDark = props.isDark;

    // const piece = props.positions.find(
    //     (p) => p.x === parseInt(props.x) && p.y === parseInt(props.y)
    // );
    // const isEmpty = !piece || piece.type === 'empty';
    const isEmpty = props.type === 'empty';

    return (
        <div className={`Square ${isDark ? 'Dark' : 'Light'}`}>
            {!isEmpty && <Piece color={props.color} type={piece.type} />}
        </div>
    );
}

export default Square;

// To-do :
// unificirana nomenklatura isDark => isDarkSquare
// type so color vo edno