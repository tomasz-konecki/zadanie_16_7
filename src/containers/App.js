import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    text: 'Do something 1',
                    id: 1,
                },
                {
                    text: 'Do something 2',
                    id: 2,
                },
                {
                    text: 'Do something 3',
                    id: 3,
                }
            ],
            value: ""
        };

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateValue = this.updateValue.bind(this);

    }

    addTodo() {
        const todo = {
            text: this.state.value,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({
            data,
            value: ""
        });
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({
            data: remainder
        });
    }

    updateValue(newValue) {
        this.setState({
            value: newValue
        });
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="APPLICATION 'TODO'" />
                <TodoForm add={this.addTodo} updateValue={this.updateValue} value={this.state.value} />
                <p className={style.number}>Number of tasks: {this.state.data.length}</p>
                <TodoList list={this.state.data} remove={this.removeTodo}/> 

            </div>
        );
    }
}

export default App;