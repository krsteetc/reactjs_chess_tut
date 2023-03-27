import './Letters.css'
import React from "react";

function Letters () {
    const letters = ['A','B','C','D','E','F','G','H'] ;

    return (
        <div className='letter' >
            {letters.map((letter) => <p>{letter}</p>)}
        </div>
    )
}

export default Letters;