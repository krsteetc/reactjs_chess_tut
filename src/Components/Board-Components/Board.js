 import './Board.css'
import Square from "./Square";


function Board (props) {

    const turn = props.turn;
    const selectedPiece = props.selectedPiece;
    const isSelected = props.isSelected;


    function selectPiece(piece){
        props.setPiece(piece);
    }
    function isPieceSelected(isTrue) {
       props.setIsSelected(isTrue);
    }
    function movePiece(x,y) {
        props.onMovePiece(x,y,selectedPiece)
    }

    function setLegalMoves(piece, currentLegalMoves) {
        const legalMoves = props.getLegalMoves(piece.x, piece.y);
        props.onSetLegalMoves(piece, legalMoves)
    }



    return (
        <div className="board-card">
            {props.squares.map(
                (square) => <Square
                    x={square.x}
                    y={square.y}
                    type={square.type}
                    isEmpty={square.isEmpty}
                    isSelected={isSelected}
                    key={`${square.x}-${square.y}`}
                    squares={props.squares}
                    onSelectPiece={selectPiece}
                    onSetIsPieceSelected={isPieceSelected}
                    onMovePiece={movePiece}
                    isSquareDark={square.isDark}
                    selectedPiece={selectedPiece}
                    turn={turn}
                    setTurn={props.setTurn}
                    isLegal={square.isLegal}
                    onSetLegalMoves={setLegalMoves}
                    promotePawn={props.promotePawn}
                    getLegalMoves={props.getLegalMoves}
                />
            )}
        </div>
    );
}
export default Board;