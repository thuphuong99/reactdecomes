import React from 'react';
import { Layout, Row, Col } from 'antd';
import HeaderComponent from './header';
import FooterComponent from './footer';

const { Content } = Layout;
const LayoutComponent = (props) =>{
    return (
        <Layout>
         <HeaderComponent/>     
        <content>
            <Row>
            <Col span={20} offset={2}>
                {props.children}
            </Col>
            </Row>
        </content>
        <FooterComponent/>
        </Layout>
      
    );
}
export default LayoutComponent;