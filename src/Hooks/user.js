import React from 'react';
import LayoutComponent from './components/user/layout';
import ContentUser from './components/user/content';

const ListUser = () => {
    return (
        <LayoutComponent>
            <ContentUser />
        </LayoutComponent>
    )
}
export default React.memo(ListUser);