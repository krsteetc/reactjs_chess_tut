import React, {forwardRef, useRef, useImperativeHandle} from 'react';
import './Modal.css'
import {createPortal} from "react-dom";

const Modal = forwardRef(function Modal({winner, result}, ref){


    const dialogRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            show() {
                dialogRef.current.showModal()
            }
        }
    } )

    return createPortal(
        <dialog ref={dialogRef} className="modal">
            <div className="modal-content">
                <h1>Game Over!</h1>
                <p>
                    {winner ? `${winner} won the game!` : result}
                </p>
                <button onClick={() => window.location.reload()}>Play again</button>
            </div>
        </dialog>,
        document.getElementById('modal')
    );
})

export default Modal;
