import './Piece.css';

function Piece (props) {

    const type = props.type;
    const pieceImage = `/piece-images/${type}.png`

    return (
        <div className='Piece' style={{backgroundImage: `url(${pieceImage})`}}>
            {/* <img src={`/piece-images/${type}.png`} alt={`${type}`}/> */}
        </div>
            )
}

export default Piece;
