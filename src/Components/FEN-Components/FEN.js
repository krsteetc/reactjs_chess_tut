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

    function isFenValid () {
        const sections = localFen.split('/');
        if (sections.length !== 8) {
            return false;
        }
        for (const section of sections) {
            const sectionLength = section.length;
            if (sectionLength < 1 || sectionLength > 8) {
                return false;
            }
            for (let i = 0; i < sectionLength; i++){
                if (isNaN(section[i])) {
                    if (
                        section[i].toLowerCase() !== 'p' &&
                        section[i].toLowerCase() !== 'q' &&
                        section[i].toLowerCase() !== 'k' &&
                        section[i].toLowerCase() !== 'n' &&
                        section[i].toLowerCase() !== 'b' &&
                        section[i].toLowerCase() !== 'r'
                    ) {
                        return false;
                    }
                }
                else {
                    if (parseInt(section[i]) < 1 || parseInt(section[i]) > 8 ){
                        return false;
                    }
                }
                let counter = 0;
                if (!isNaN(section[i])){
                    counter += parseInt(section[i]);
                }
                else {
                    counter += 1;
                }
                if (counter > 8) {
                    return false;
                }
            }
        }
        return true;
    }

    function onSubmitHandler (event) {
        event.preventDefault();
        if (isFenValid(localFen)){
            props.onFenChange(localFen)
        }
        else {
            console.log('INVALID FEN')
            //Handle invalid, neshto takvo da izlezi kako prozorche primer ili neshto taka
        }

    }

    return (
       <div className='FEN'>
           <form onSubmit={onSubmitHandler} >
               <div className='Field'>
                    <label>FEN</label>
                    <input type='text' value={localFen}  className='TextBox' onChange={localFenEditHandler} />
               </div>
               <div className='Button'>
                   <button type='submit'>Edit FEN</button>
               </div>
           </form>
       </div>
    )
}

export default FEN;