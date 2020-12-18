import React, {Component}from 'react';
import PropTypes from 'prop-types';


export default class ButtonComponent extends Component {
    render() {
        return (
            <>
             <button onClick={this.props.btnClick} type="this.props.type">{this.props.children}</button>
            </>
        );
    }
}

//kiem tra  props cua componets
ButtonComponent.propTypes={
    btnClick: PropTypes.func.isRequired,
     type: PropTypes.string.isRequired, 
    children: PropTypes.string.isRequired
}

//gan gia tri mac dinh cho props
//la phuong thuc chay dau tien khi component duoc tao ra 
ButtonComponent.defaultPorp = {
    type: "button"
}
