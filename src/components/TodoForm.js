import React from 'react';
import {useForm} from "react-hook-form";

const TodoForm = ({addTask,editTodo,updateTask}) => {

    const {handleSubmit, register, reset} = useForm();

    const createTask = (data) => {
        if (!editTodo) {
            addTask(data)
        } else {
            updateTask(data)
        }
        reset()
    }

    return (

        <form onSubmit={handleSubmit(createTask)} className={'form'}>

            <input
                type="text" {...register('name')}
                placeholder="Todo Title..."
                required
                className={'task-input '}/>
            <input
                type="text" {...register('description')}
                placeholder="Todo Description..."
                required
                className={'task-input '}
            />

            <button type={"submit"} className={'add'}>{editTodo ? "Edit" : "Add"}</button>

        </form>
    );
};

export default TodoForm;
