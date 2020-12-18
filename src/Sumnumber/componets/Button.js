import React from 'react';
//import PropTypes from 'prop-types';
const Button = (props) =>{
    return (
        <>
        < button 
        type ={props.type}
        onClick={props.click}
        >
            {props.children}
         </button>
        </>
    )
}
export default Button;