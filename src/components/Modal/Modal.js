import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

function Modal(props) {
  console.log("Modal");
 
    return (
      <>
     <div>
                <Backdrop />
                <div style={{height:'200px', textAlign:'center', position:'fixed', backgroundColor:'#fff', zIndex: 500, left: '15%', top: '10%', boxSizing: 'border-box', width: '70%'}}>
                    <h1>{props.title}</h1>
                    {props.content}
                </div>
            </div>

      </>
    )
}

export default Modal
