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

    function isFenValid(localFen) {
        const sections = localFen.split('/');

        if (sections.length !== 8) {
            return false;
        }

        for (const section of sections) {
            const sectionLength = section.length;

            if (sectionLength < 1 || sectionLength > 8) {
                return false;
            }

            let counter = 0;

            for (let i = 0; i < sectionLength; i++) {
                const char = section[i];

                if (isNaN(char)) {
                    const lowercaseChar = char.toLowerCase();

                    if (!['p', 'q', 'k', 'n', 'b', 'r'].includes(lowercaseChar)) {
                        return false;
                    }

                    counter++;
                } else {
                    const num = parseInt(char);

                    if (num < 1 || num > 8) {
                        return false;
                    }

                    counter += num;
                }

                if (counter > 8) {
                    return false;
                }
            }

            if (counter !== 8) {
                return false;
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