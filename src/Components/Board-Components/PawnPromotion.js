import './PawnPromotion.css';


function PawnPromotion (props){

    const color = props.color;
    const x = props.square.x;
    const y = props.square.y === 8 ? 7 : 2;


    // async function promotePawn(letter, x, y) {
    //     await props.promotePawn(letter, x, y);
    //     props.hidePawnPromotion();
    // }

     function promotePawn(letter, x, y) {
         props.promotePawn(letter, x, y);
         props.hidePawnPromotion();
    }


    return(
        <div className='PawnPromotion'>
            <div className={"Knight PromoteButton"} onClick={() => promotePawn('N', x, y)} ><img src={`/piece-images/knight_${color}.png` } alt={'Knight'}></img></div>
            <div className={"Bishop PromoteButton"}  onClick={() => promotePawn('B', x, y)} ><img src={`/piece-images/bishop_${color}.png` } alt={'Bishop'}></img></div>
            <div className={"Rook PromoteButton"} onClick={() => promotePawn('R', x, y)} ><img src={`/piece-images/rook_${color}.png` } alt={'Rook'}></img></div>
            <div className={"Queen PromoteButton"} onClick={() => promotePawn('Q', x, y)}> <img src={`/piece-images/queen_${color}.png` } alt={'Queen'}></img></div>
        </div>
    );
}

export default PawnPromotion;