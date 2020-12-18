import React from 'react'; 
import MyProvider from './global/my-provider';
import UserProvider from './global/user-provider';
import HeaderComponent from './componets/header';
import Content from './componets/contens';
import FooterComponet from './componets/footer';


class ContextApi extends React.Component{
    render(){
        return(
            <UserProvider>
                <HeaderComponent/>
                <MyProvider>
                    <Content/>
                </MyProvider>
                <FooterComponet/>
            </UserProvider>
        )
    }
}
export default ContextApi;