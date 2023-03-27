import './Square.css'

function Square (props) {

    let isDark = false;
    let x = parseInt(props.x);
    let y = parseInt(props.y);

    if ((x+y+2) % 2 === 0){
        isDark=true;
    }


    return (
        <div className={`Square ${isDark? 'Dark' : 'Light'}`} >
        </div>
    );
}

export default Square;