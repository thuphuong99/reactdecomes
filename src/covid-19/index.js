import React from 'react';
import LayoutComponent from './components/partials/layout';
import Gobal from './components/gobal';
import Countries from './components/coutries';
import CoronaProvider from './context/my-provider';

class Corona extends React.Component{
    render(){
        return (
            <LayoutComponent>
                <CoronaProvider>
                <Gobal/>
                <Countries/>
                </CoronaProvider>
            </LayoutComponent>
        );
    }
}
export default Corona;