import React from 'react';
import MyContext from '../global/my-context';
const FooterComponet =()=>{
    return(
        <MyContext.Consumer>
            {context => (
                   <footer className="my-footer">
                   <p>copyright 2020-Rj2007B</p>
                   <h3>hi:{context.email}</h3>
               </footer>
            )}
     
        </MyContext.Consumer>
    )
}
export default FooterComponet;