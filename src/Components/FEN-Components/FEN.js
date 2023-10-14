import './FEN.css'
import {useEffect, useState} from "react";

function FEN (props) {
    function localFenEditHandler (event) {
        setLocalFen(event.target.value.toString());
    }
   function fenLocalChangeHandler(){
       setLocalFen(props.fen || '');
    }

    useEffect(() => {
       fenLocalChangeHandler();
    }, [props.fen]);

    const [localFen, setLocalFen] = useState(props.fen || '');

    //write fen validity checking function


    function onSubmitHandler (event) {
        event.preventDefault();
        // if (isFenValid(localFen)){
            props.onFenChange(localFen)
        // }
        // else {
        //     console.log('INVALID FEN')
        //     //Handle invalid, neshto takvo da izlezi kako prozorche primer ili neshto taka
        // }

    }

    return (
       <div className='FEN'>
           <form onSubmit={onSubmitHandler} >
                   <div className='Title'>
                       <label>FEN</label>
                   </div>
               <div className='Field'>
                    <input type='text' value={localFen}  className='TextBox' onChange={localFenEditHandler} maxLength='64' spellCheck={false}/>
               </div>
               <div className='Button'>
                   <button type='submit'>Edit FEN</button>
               </div>
           </form>
       </div>
    )
}

export default FEN;