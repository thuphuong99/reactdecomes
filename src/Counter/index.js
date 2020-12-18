import React from 'react';
import Button from './componets/Button';
import Result from './componets/Result';

class Counter extends React.Component{
    constructor(){
        super();
        //khai bao state
        this.state = {
            count : 0
        }
        this.incrementCounter = this.incrementCounter.bind(this);
        this.disrementCounter = this.disrementCounter.bind(this);
    }

    incrementCounter(){
        //hanh dong xu ly cho cai su kien click+button +
        //cap nhat va thay doi cai state count-khi state count thay doi se keo theo viec render lai giao dien 
        //hoan toan cap nhat dk state
        this.setState({count: this.state.count + 1} , () => {
            //hanh dong de xu ly cho viec sau khi state duoc cap nhat xong
            console.log('da tang state');
        });
    }
    disrementCounter = () =>{
        this.setState(state => {
            // this.state.count: la cai state ban dau duoc tao ra
            //state: la state hien tai dnag duoc cap nat-xu ly
            return {count: this.state.count -1 }
        });
     }

     viewDisrement = () => {
         this.disrementCounter();
         this.disrementCounter();
         this.disrementCounter();
         console.log('this.state.count');
     }

    render(){
        return (
        <>
            <Result count={this.state.count}/>
            <Button type="button" click={this.incrementCounter}> + 
            </Button>
            <Button type="button" click={this.viewDisrement}> - </Button>
        </>
        );
    }
}
export default Counter;
