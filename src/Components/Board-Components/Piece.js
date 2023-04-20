import './Piece.css';

function Piece (props) {

    const type = props.type;

    return (
        <div className='Piece'>
            <img src={`/piece-images/${type}.png`} alt={`${type}`}/>
        </div>
            )
}

export default Piece;
