import './PawnPromotion.css';

function PawnPromotion (props){

    const color = props.color;
    const x = props.square.x;
    const y = props.square.y;

    function promotePawnToKnight(){
        props.setShowPawnPromotion(false);
        props.promotePawn('N',x,y,0);

    }
    function promotePawnToBishop(){
        props.setShowPawnPromotion(false)
        props.promotePawn('B',x,y,1);
    }
    function promotePawnToRook(){
        props.setShowPawnPromotion(false)
        props.promotePawn('R',x,y,2);
    }
    function promotePawnToQueen(){
        props.setShowPawnPromotion(false)
        props.promotePawn('Q',x,y,3);
    }

    return(
        <div className='PawnPromotion'>
            <div className={"Knight PromoteButton"} onClick={promotePawnToKnight} ><img src={`/piece-images/knight_${color}.png` } alt={'Knight'}></img></div>
            <div className={"Bishop PromoteButton"}  onClick={promotePawnToBishop} ><img src={`/piece-images/bishop_${color}.png` } alt={'Bishop'}></img></div>
            <div className={"Rook PromoteButton"} onClick={promotePawnToRook} ><img src={`/piece-images/rook_${color}.png` } alt={'Rook'}></img></div>
            <div className={"Queen PromoteButton"} onClick={promotePawnToQueen}> <img src={`/piece-images/queen_${color}.png` } alt={'Queen'}></img></div>
        </div>
    );
}

export default PawnPromotion;