import './Piece.css';

function Piece (props) {

    const type = props.type;
    const color = props.color;

    return (
        <div className='Piece'>
            <img src={`/piece-images/${type}_${color}.png`} alt={`${type} ${color}`}/>
        </div>
            )
}

export default Piece;
