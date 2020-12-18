import React from 'react';

class LifeCycle extends React.Component{
    constructor(){
        super();
        this.state = {
            number : 10,
            color : 'red',
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log(props, state);
       if(props.counter !== state.number){
           return { number: props.counter};
       }
       return null;
    }
    shouldComponentUpdate(nextProps, nextState){ 
        console.log(nextProps, nextState);
        /* if(nextProps.counter !== nextState.number){
            return true; 
        }
        return false; */
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
            const newColors = prevState.color !== prevProps.color  ?  prevProps.color:  prevProps.color;
            return newColors;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(snapshot);
        document.getElementById('title').style.color =snapshot;
    }

    componentWillUnmount(){
        console.log(`componets da bi xoa`);
    }
    render() {
        console.log(`componets da duoc render`)
        return (
            <>
             <h2>Number : {this.props.number}</h2>
             <p id="title" style={{color : this.state.color}}>change, and in the vast
              majority of cases you should rely on the default behavior.</p>

            
            </>
        )
    }
}
export default LifeCycle;