import React from 'react';
import MyContext from './my-context';

class UserProvider extends React.Component{
    constructor(){
        super();
        this.state = {
            username: 'RJ2007B',
            email: 'RJ2007B@gmail.com',

        }
    }
    render() {
        return (
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default UserProvider;