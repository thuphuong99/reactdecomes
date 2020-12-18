import React from 'react';
import Button from './componets/ButtonComponet';
import Header from './componets/HeaderComponet';
import Footer from './componets/FooterComponet';
// tạo ra 1 component
//sử dụng class component
//function component
class Maths extends React.Component{
    constructor(props){
        super(props);
        this.thichThiBam = this.thichThiBam.bind(this);
    }
    //viet 1 ham xu ly event
    clickButton = () => {
        alert('hi you');
    }

    thichThiBam = () => {
        //alert('da bam roi nhe!');
        this.clickButton();
    }
    //react.component
    //hiển thị data 
    render() {
        //trả về mã JSX 
        return( 
        <>
            <Header bgColor="pink" />

            <Button btnClick={this.clickButton} type="button">Click me</Button>
            <button onClick={this.thichThiBam}> bam vao toi di </button>
            <Footer bgColor="violet" />
        </>
        )
       }   
}
export default Maths;