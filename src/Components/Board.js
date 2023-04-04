import './Board.css'
import Square from "./Square";
function Board () {

    const verticalAxis = ['8','7','6','5','4','3','2','1'] ;
    const horizontalAxis = ['1','2','3','4','5','6','7','8'];

    return (
        <div className="board-card">
            {horizontalAxis.map((letter) =>
                verticalAxis.map((number) => <Square x={letter} y={number} key={`${letter}-${number}`} />)
            )}
        </div>
    );
}
export default Board;