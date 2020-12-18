import React from 'react';
import {Layout} from 'antd';

const {Footer} = Layout;
const FooterComponet = () =>{
    return(
        <Footer>
            <p style={{textAlign:'center'}}>Copyright © 2020- Rj2007B</p>
        </Footer>
    );
}
export default React.memo(FooterComponet);