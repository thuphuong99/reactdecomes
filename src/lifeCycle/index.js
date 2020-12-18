import React from 'react';
import LifeCycle from './componets/lifecycle';

class Index extends React.Component{
    //1giao doan mouting
    constructor(){
        super();
        //1-khoi tao state
        this.state = {
            count: 0,
            show:true
        }
        //2-truyen con tro this cho phuong thuc
        console.log('contruct of Index component');
    }
    static getDerivedStateFromProps(props,state){
        //thay doi state ban dau bnag props truyen vap ch component
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        //khi DOm giao dien da duoc dung xong
        //thong thuong hay call data - api o day
        //chay duy nhat 1 lan cong doi ua componets
        console.log(`componentDisMout of Index componets`);
    }

    changeCounters =() =>  {
        this.setState({...this.state, count: this.state.count + 1})
    }

    showAndHide =() => {
        this.setState({...this.state, show: !this.state.show});
    }
    render(){
        return (
        <>
            <h1>this is Index</h1>
            <br/>
            <button onClick={this.changeCounters}>click me</button>
            {this.state.show ? (<LifeCycle color="yellow"counter ={this.state.count}/>) :null}
            <button onClick={this.showAndHide}>show/hide LifeCycle</button>
            
        </>
        )
    }
}
export default  Index;

