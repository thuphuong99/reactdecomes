import React from 'react';
import { Layout } from 'antd';

const {Footer} = Layout;
const FooterComponet = () =>{
    return (
        <Footer>
            <div className="my-footer">
                <p style={{ textAlign:'center'}}>copyright 2020-Rj2007B</p>
            </div>
        </Footer>
    )
}
export default React.memo(FooterComponet) ;