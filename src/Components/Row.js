import Square from "./Square";
import './Row.css';


function Row (props){

    return (
        <div className='Row'>
            {
                props.elements.map(
                    (number) => <Square key={number+props.row} x={number} y={props.row}/>
                )
            }
        </div>
    )

}
export default Row;