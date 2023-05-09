import './Board.css'
import Square from "./Square";

function Board (props) {

    let activePiece = null;

        function grabPiece(e) {
            const element = e.target;
            const x = e.clientX - 50;
            const y = e.clientY - 50;
            if(element.classList.contains('Piece')) {
                element.style.position = "absolute";
                element.style.left = `${x}px`
                element.style.top = `${y}px`;
                activePiece = element;
            }
        }
        function movePiece(e) {
            if(activePiece) {
                const x = e.clientX - 50;
                const y = e.clientY - 50;
                activePiece.style.position = "absolute";
                activePiece.style.left = `${x}px`
                activePiece.style.top = `${y}px`;

            }
        }
        function dropPiece(e) {
            if(activePiece) {
                activePiece = null;
            }
        }

    const verticalAxis = ['8','7','6','5','4','3','2','1'] ;
    const horizontalAxis = ['1','2','3','4','5','6','7','8'];

    return (
        <div onMouseMove={e => movePiece(e)} onMouseDown={e => grabPiece(e)} onMouseUp={e => dropPiece(e)} className="board-card">

            {horizontalAxis.map((letter) =>
                verticalAxis.map((number) =>
                    <Square
                    x={letter}
                    y={number}
                    isSquareDark={props.isSquareDark(letter, number)}
                    key={`${letter},${number}`}
                    positions={props.positions}
                    />
                )
            )}
        </div>

    );
}
export default Board;