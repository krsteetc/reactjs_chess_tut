import './Board.css'
import Square from "./Square";

function Board (props) {
    function selectPiece(piece){
        props.setPiece(piece);
    }
    function isPieceSelected(isTrue) {
       props.setIsSelected(isTrue);
    }
    function movePiece(x,y) {
        props.onMovePiece(x,y)
    }
    function setLegalMoves(piece) {
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
                    isSelected={props.isSelected}
                    key={`${square.x}-${square.y}`}
                    squares={props.squares}
                    onSelectPiece={selectPiece}
                    onSetIsPieceSelected={isPieceSelected}
                    onMovePiece={movePiece}
                    isSquareDark={square.isDark}
                    selectedPiece={props.selectedPiece}
                    turn={props.turn}
                    setTurn={props.setTurn}
                    isLegal={square.isLegal}
                    onSetLegalMoves={setLegalMoves}
                    promotePawn={props.promotePawn}
                    getLegalMoves={props.getLegalMoves}
                    previouslySelectedSquare={props.previouslySelectedSquare}
                    squareHighlighter={props.squareHighlighter}
                />
            )}
        </div>
    );
}
export default Board;