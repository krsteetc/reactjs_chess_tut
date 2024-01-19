import Board from "../Board-Components/Board";
import {fenToSquaresConvertor, initialPositions} from "../../utils";
import './Tutorials.css'

export function Tutorial({title,description,fen}) {

    let squares

    if(fen) {
        squares = fenToSquaresConvertor(fen, initialPositions)
    }
    else {
         squares = initialPositions
    }


    return (
        <div className='Tutorial'>
            <div className='TitleAndDescription'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className='Board'>
                <Board squares={squares}/>
            </div>
        </div>
    )
}