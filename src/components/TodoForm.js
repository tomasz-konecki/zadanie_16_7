import React from 'react';
import style from './TodoForm.css';

const TodoForm = props => {

    return (
    
        <form className={style.TodoForm}>
            <label>Enetr a task:</label>
            <input 
                type='text'
                id='task'
                className={style.input} 
                value={props.value}
                onChange={(event) => props.updateValue(event.target.value)}
            /> 
    
            <button onClick={() => props.add()}>Submit</button> 
        </form>
    )

}

export default TodoForm; 