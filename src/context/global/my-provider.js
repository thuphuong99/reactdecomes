//day la noi chia se du lieu
import React from 'react';
import MyContext from './my-context'; 
import  {student} from './my-data';

class MyProvider extends React.Component {
    constructor(){
        super();
        this.state = {
            student: student
        }
    }

    render() {
        return(
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

 
 export default MyProvider;