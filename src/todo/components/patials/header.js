import React from 'react';
import { Layout } from 'antd';


const { Header } = Layout;
const HeaderComponent = () => {
    return (
        <Header>
            <div className="my-header">
                <h1 style={{color:'white', textAlign:'center'}}>todo app</h1>
            </div>
        </Header>
    )
}
export default React.memo(HeaderComponent) ;