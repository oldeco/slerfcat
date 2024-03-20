import React from 'react';
import '../Modal.css';

function Modal(props) {
    // If the prop 'show' is false, don't render anything
    if (!props.show) {
        return null;
    }

    return ( <
        div className = "modal"
        onClick = {
            props.onClose
        } >
        <
        div className = "modal-content" >
        <
        p className = 'text' > Welcome to the home of < span className = 'blue1' > SHAILUSHAI < /span></p >
        <
        p className = 'enter' > (click anywhere) < /p> <
        /div> <
        /div>
    );
}

export default Modal;