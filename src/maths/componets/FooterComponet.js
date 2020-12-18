import React from 'react';
import PropTypes from 'prop-types';
class FooterComponet extends React.Component{
     render(){
         return(
             <>
             <footer  style={{backgroundColor: this.props.bgColor}}className="footer">
                 <h2>this is a footer</h2>
             </footer>
             </>
         )
         
     }
}
export default FooterComponet;
FooterComponet.propTypes={
    bgcolor: PropTypes.string.isRequired,
    
}
