import './Letters.css'
import React from "react";

function Letters () {
    const letters = ['A','B','C','D','E','F','G','H'] ;

    return (
        <div className='letters' >
            {letters.map((letter) => <p key={letter}>{letter}</p>)}
        </div>
    )
}

export default Letters;