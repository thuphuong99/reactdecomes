import React from 'react';
import LayoutComponent from './components/patials/layout';
import AddTodo from './components/add-todo';
import ListTodo from './components/list-todo';
import FinishedAndDelete from './components/action-todo';

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            idTodo: 1,
            nameTodo: '',
            listTodo: [], //{id:1,name :'hoc css, dine:false}
            showUnished: false
        }
    }

    //thuc hen them cong viec
    addTodo = (namework = '') => {
        if (namework.length > 0) {
            //cap nhat thya doi state
            this.setState({
                idTodo: this.state.idTodo + 1, //dam bao id khong trung lap nhau
                nameTodo: '',
                listTodo: [...this.state.listTodo, {
                    id: this.state.idTodo,
                    name: namework,
                    done: false //cong viec chua han thanh
                }]

            });
        }
    }

    changeTodo = (event) => {
        const name = event.target.value;
        this.setState({
            nameTodo: name //cap nhat lai state
        });

    }

    deleteItemTodo = (idWork) => {
        //xoa cac cogn viec theo id tung cong viec
        //can loai bo cong viec tring voi idwork truyen vao mang listtodo khai bao o constructor
        const newTodo = this.state.listTodo.filter(item => item.id !== idWork);
        this.setState({
            ...this.state,
            listTodo: newTodo
        });
    }

    finishedItemTodo = (idwork) => {
        //cap nhat lai cai trang thai done cua ve true cua  cong viec co ma la idwork truyen vao
        const finishedTodo = this.state.listTodo.map(item => {
            return item.id === idwork ? { ...item, done: !item.done } : item;
        });
        this.setState({
            ...this.state,
            listTodo: finishedTodo

        });

    }

    finishedAndDelete = (typeAction) => {
        switch (typeAction) {
            case 'DeleteAll':
                    this.setState({
                        idTodo: 1,
                        listTodo: [],
                        showUnished: false
                    });
                break;
            case 'finishedAll':
                const newFinish = this.state.listTodo.map(item =>{
                    return {...item, done:true}
                })
                this.setState({
                    listTodo: newFinish,
                    showUnished:true
                })
                break;
                default:
                    this.setState({
                        listTodo: {...this.state.listTodo}
                    })
                    break;
            case 'unfinishedAll':
                const Finish = this.state.listTodo.map(item =>{
                    return {...item, done:false}
                })
                this.setState({
                    listTodo: Finish
                })
        }
    }


    //class TodoApp extends React.Component {
    render() {
        return (
            <LayoutComponent>
                <AddTodo
                    add={this.addTodo}
                    change={this.changeTodo}
                    value={this.state.nameTodo}
                />
                <FinishedAndDelete 
                action={this.finishedAndDelete} 
                show={this.state.showUnished}
                />
                <ListTodo
                    todo={this.state.listTodo}
                    delete={this.deleteItemTodo}
                    finished={this.finishedItemTodo}

                />
            </LayoutComponent>
        )
    }
}
export default React.memo(TodoApp);