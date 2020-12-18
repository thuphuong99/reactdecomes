import React from 'react';
import MyContext from './my-context';
import {api} from '../api/index';

class ApiProvider extends React.Component{
    constructor(){
        super();
        this.state = {
            virus:[]
        }
    }
    setStateAsync = (state) => {
        return new Promise(resolve =>{
            this.setState(state, resolve);
        })
    }

    async componentDidMount() {
        const data = await api.getDataVirusCorona();
        //console.log(data);
       // this.setState({virus:data}); =>no bat dong bo nen ta khong dung cai nay
       await this.setStateAsync({...this.state, virus:data}); 
    }

    render() {
        return (
            <MyContext.Provider value={this.state.virus}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}
export default ApiProvider;
