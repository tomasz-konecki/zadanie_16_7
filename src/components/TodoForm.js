import React from 'react';
import style from './TodoForm.css';

const TodoForm = props => {

    return (
    
        <form className={style.TodoForm}>
            <label>Enetr a task:</label>
            <input type='text' id='task' className={style.input} />
    
            <button onClick={() => this.props.add(event.target.value)}>Submit</button>
        </form>
    )

}

export default TodoForm;