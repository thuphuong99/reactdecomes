import React from 'react';
import Button from './componets/Button';
import Result from './componets/Result';
import Input from './componets/input';

class ToTalNumber extends React.Component{
    constructor(){
        super();
        this.state = {
            n1: 0,
            n2: 0,
            total :0
        }
    }
    Sumnumber = () =>{
        let number1 = this.state.n1;
        let number2 = this.state.n2;
        if(!isNaN(number1) && !isNaN(number2)){
            //ca hai thuc su la some//thuc su ep ve so thuc
            number1 = parseFloat(number1);
            number2 = parseFloat(number2);
            let sum =  number1 + number2;
            this.setState({total: sum});
        }else{
            this.setState({total: NaN});
        }
    }
    changeInput = (event) =>{ //su kien tac dong vao 1 
        //lay ra ten cua thuoc tinh o input
        //de chung ta biet dk dang thao tac voi o input nao 
        let nameInput = event.target.name; //chi phoi boi csu kien nay 
       // console.log(nameInput);
       let valNumber = event.target.value;
       if(nameInput === 'number1'){
           this.setState({n1: valNumber});
       }
       else if(nameInput === 'number2'){
           this.setState({n2: valNumber});
       }

    }
    render(){
        return (
            <>
             <Input
              name ="number1" 
              value={this.state.n1} 
              change={this.changeInput}
              />
                <br/>
              <Input 
               name ="number2" 
               value={this.state.n2}
               change={this.changeInput}
               />
                <br/>
                <Button  click={ this.Sumnumber} type="button">Tong</Button>
                <Result total={this.state.total}  />
            </>
        )
    }
}
export default  ToTalNumber;