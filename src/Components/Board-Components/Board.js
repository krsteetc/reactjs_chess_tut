import { useRef } from 'react';
import './Board.css'
import Square from "./Square";

function Board (props) {
    
    const chessboardRef = useRef(null);
    let activePiece = null;

        function grabPiece(e) {
            const element = e.target;
            const x = e.clientX - 50;
            const y = e.clientY -50;
            if(element.classList.contains('Piece')) {
                element.style.position = "absolute";
                element.style.left = `${x}px`
                element.style.top = `${y}px`;
                activePiece = element;
            }
        }
        function movePiece(e) {
            const chessboard = chessboardRef.current;
            if(activePiece && chessboard) {
                const minX = chessboard.offsetLeft - 25;
                const minY = chessboard.offsetLeft -540;
                const maxX = chessboard.offsetLeft + chessboard.clientWidth - 80;
                const maxY = chessboard.offsetLeft + chessboard.clientHeight - 580;
                const x = e.clientX - 50;
                const y = e.clientY - 50;
                activePiece.style.position = "absolute";
                console.log(y)
                // activePiece.style.left = `${x}px`;
                activePiece.style.top = `${y}px`;
                if(x < minX) {
                    activePiece.style.left = `${minX}px`;
                } else if(x > maxX) {
                    activePiece.style.left = `${maxX}px`
                } else {
                    activePiece.style.left = `${x}px`
                }

                if(y < minY) {
                    activePiece.style.top = `${minY}px`;
                } else if(y > maxY) {
                    activePiece.style.top = `${maxY}px`;
                }
                else {
                    activePiece.style.top = `${y}px`;
                }

            }
        }
        function dropPiece(e) {
            activePiece = null;
        //     const chessboard = chessboardRef.current;
        //     if (activePiece && chessboard) {
        //       const x = Math.floor((e.clientX - chessboard.offsetLeft) / 100);
        //       const y = Math.floor((e.clientY - chessboard.offsetTop) / 100)
        // }
    }


    const verticalAxis = ['8','7','6','5','4','3','2','1'] ;
    const horizontalAxis = ['1','2','3','4','5','6','7','8'];

    return (
        <div onMouseMove={e => movePiece(e)}
        onMouseDown={e => grabPiece(e)}
        onMouseUp={e => dropPiece(e)}
        className="board-card"
        ref = {chessboardRef}
        >


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