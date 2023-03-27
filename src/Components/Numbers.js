import './Numbers.css'
import React from "react";

function Numbers () {
    const numbers = ['1','2','3','4','5','6','7','8'] ;

    return (
        <div className='number' >
            {numbers.map((number) => <p>{number}</p>)}
        </div>
    )
}

export default Numbers;