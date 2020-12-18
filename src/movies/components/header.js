import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';

const { Header } = Layout;

const HeaderComponent = () => {
    const location = useLocation(); 
    const pathname = location.pathname;
    //console.log(pathname);


    return (

        <Header>
            <NavLink to="/">
                <div className="logo"></div>
            </NavLink>

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
                <Menu.Item key="/home">
                    <NavLink to="/home">trang chu
                     </NavLink>
                </Menu.Item>
                <Menu.Item key="/up-coming">
                    <NavLink to="/up-coming">
                        phim sap cong chieu
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="/searchs">
                    <NavLink to="/searchs">tim kiem phim
                    </NavLink>
                </Menu.Item>
            </Menu>
        </Header>

    )
}
export default React.memo(HeaderComponent);
