import React from 'react';

//su dung function compponets
//su dung ham de tao 1 component chu ko sd class de
const Button = (props) => {
    //props: 1bien dai dien cho tat ca cac  thuoc tinh truyen vao componets 
    //sau nay: thong thuong no sex laf object
    //trong nay khong toon tai phuong thuc render
    return (
        <>
            <button 
                onClick={props.click}
                type={props.type}
            >{props.children}</button>  
        </>
        
    );
}
export default Button;