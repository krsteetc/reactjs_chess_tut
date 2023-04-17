import './Square.css'

function Square (props) {

    const isDark = props.isDark;

    return (
        <div className={`Square ${isDark? 'Dark' : 'Light'}`} ></div>
    );
}

export default Square;