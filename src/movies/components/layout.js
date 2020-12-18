import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import HeaderComponent from './header';
import FooterComponet from './footer';
import './layout.css';

const { Content } = Layout;
const LayoutComponent = (props) => {
    return (
        <Layout className="layout">
            <HeaderComponent />
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">{props.children}</div>
            </Content>
            <FooterComponet />
        </Layout>
    )
}
LayoutComponent.propTypes = {
    children: PropTypes.node
}
export default React.memo(LayoutComponent);