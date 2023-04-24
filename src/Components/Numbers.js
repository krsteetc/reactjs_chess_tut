import './Numbers.css'
import React from "react";

function Numbers () {
    const numbers = ['8','7','6','5','4','3','2','1'] ;

    return (
        <div className='numbers' >
            {numbers.map((number) => <p key={number}>{number}</p>)}
        </div>
    )
}

export default Numbers;