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


    function onSubmitHandler (event) {
        event.preventDefault();
            props.onFenChange(localFen)
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