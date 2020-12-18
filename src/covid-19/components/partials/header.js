import React from 'react';
import { Layout } from 'antd';


const { Header, Footer, Sider, Content } = Layout;
const HeaderComponent = () => {
    return (
        <Header>
            <div className="my-header">
                <h1 style={{color:'white', textAlign:'center'}}>thong tin dich benh covid</h1>
            </div>
        </Header>
    )
}
export default HeaderComponent;