import React from 'react';

const Todo = ({todo, removeTask, editTask, toggleTask}) => {

    return (
        <div className={'todo-list'}>

            <div className={todo.completed ? 'completed' : 'notCompleted'}>
                <h4>{todo.name}</h4>
                <h4> {todo.description}</h4>
                <span>  {new Date(todo.id).toLocaleString().slice(11,20)}</span>
            </div>

            <div className={'todo-list-buttons'}>
                <input type="checkbox" onClick={() => toggleTask(todo.id)}/>
                <button className={'edit'} onClick={() => editTask(todo.id)}>Edit</button>
                <button className={'delete'} onClick={() => removeTask(todo.id)}>X</button>
            </div>

        </div>
    );
};

export default Todo;
