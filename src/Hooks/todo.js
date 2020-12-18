import React, { useState } from 'react';
import InputTodo from './components/todo/input';
import ButtonAddTodo from './components/todo/button';
import ListTodo from './components/todo/list-todo';

const TodoApp = () => {

    const [nameTodo, setNameTodo] = useState('');
    const [idTodo, setIdTodo] = useState(1);
    const [listTodo, setListTodo] = useState([]);

    const changeInput = (event) => {
        const val = event.target.value;
        setNameTodo(val);
    }

    const addTodo = (namework) => {
        if (namework.length > 0) {
            setIdTodo(idTodo + 1);
            setListTodo([...listTodo, {
                id: idTodo,
                name: namework,
                done: false
            }]);
            setNameTodo('');
        }
    }

    return (
        <>
            <InputTodo value={nameTodo} change={changeInput} type="text" />
            <ButtonAddTodo
                value={nameTodo}
                add={addTodo}
                type="button">
                Add</ButtonAddTodo>
            <ListTodo  todo={listTodo}/>
        </>
    )
}
export default TodoApp;