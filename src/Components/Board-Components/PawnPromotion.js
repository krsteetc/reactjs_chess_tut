import './PawnPromotion.css';

function PawnPromotion (props){

    const color = props.color;
    const x = props.square.x;
    const y = props.square.y;

    function promotePawnToQueen(){
        const pieceType = 'queen';
        props.promotePawn(pieceType,color,x,y);
        props.hidePawnPromotion();
    }
    function promotePawnToRook(){
        const type = 'rook';
        props.promotePawn(type,color,x,y);
        props.hidePawnPromotion();
    }
    function promotePawnToBishop(){
        const type = 'bishop';
        props.promotePawn(type,color,x,y);
        props.hidePawnPromotion();
    }
    function promotePawnToKnight(){
        const type = 'knight';
        props.promotePawn(type,color,x,y)
        props.hidePawnPromotion();
    }

    return(
        <div className='PawnPromotion'>
            <div className={"Queen PromoteButton"} onClick={promotePawnToQueen}> <img src={`/piece-images/queen_${color}.png` } alt={'Queen'}></img></div>
            <div className={"Rook PromoteButton"} onClick={promotePawnToRook} ><img src={`/piece-images/rook_${color}.png` } alt={'Rook'}></img></div>
            <div className={"Bishop PromoteButton"}  onClick={promotePawnToBishop} ><img src={`/piece-images/bishop_${color}.png` } alt={'Bishop'}></img></div>
            <div className={"Knight PromoteButton"} onClick={promotePawnToKnight} ><img src={`/piece-images/knight_${color}.png` } alt={'Knight'}></img></div>
        </div>
                
    );

}

export default PawnPromotion;