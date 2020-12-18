import React from 'react';
import './common.css';
import PropTypes from 'prop-types';
class HeaderComponent extends React.Component {
    render() {
        return (
            <>
            {/* day la ma jsx */}
            <header  style={{backgroundColor:this.props.bgcolor}} className="header">
                <h1>this is a header</h1>
            </header>
            </>
        )
    }
}
export default HeaderComponent;

//kiem tra  props cua componets
HeaderComponent.propTypes={
    bgcolor: PropTypes.string.isRequired,
    
}

