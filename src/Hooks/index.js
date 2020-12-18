import React, { useState } from 'react';
import ButtonComponent from './components/button';
import Result from './components/result';

const CounterHooks = (props) => {
    //dinh nghia state va cach thuc cap nhat lai state
    //thisstate: 1 phuong thuc xu ly mat dong bo 
    //setcount: cap nhat lai state
    const [count, setCount] = useState(10);
    const disrementCounter = () => {
        setCount(count + 1);

    }
    const decrementCounter = () => {
        setCount(count - 1);
    }

    return (
        <>
            <Result result={count} />
            <ButtonComponent
                click={disrementCounter}
                type="button">+</ButtonComponent>
            <ButtonComponent
                click={decrementCounter}
                type="button">-</ButtonComponent>
        </>
    );
}
export default CounterHooks