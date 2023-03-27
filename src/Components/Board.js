import './Board.css'
import Row from "./Row";
function Board () {

    const verticalAxis = ['1','2','3','4','5','6','7','8'] ;
    const horizontalAxis = ['8','7','6','5','4','3','2','1'];

    return(
        <div className='board-card'>
            {horizontalAxis.map(
                (letter) => <Row key={letter} elements={verticalAxis} row={letter} />
            )}
        </div>
    )
}
export default Board;