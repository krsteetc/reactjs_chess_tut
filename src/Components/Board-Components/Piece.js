import './Piece.css';

function Piece (props) {

    const type = props.type;
    const pieceImage = `/piece-images/${type}.png`

    return (
        <div className='Piece' style={{backgroundImage: `url(${pieceImage})`}}>
        </div>
            )
}

export default Piece;
