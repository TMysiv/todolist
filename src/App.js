import React, {useState} from 'react';

import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import css from './App.css'

const App = () => {

    const [toDos, setToDos] = useState([]);
    const [editTodo, setEditToDo] = useState(null);

    const addTask = (data) => {
        const newTask = {
            id: new Date().getTime(),
            name: data.name,
            description: data.description,
            completed: false
        }
        setToDos([...toDos, newTask])
    }

    const removeTask = (id) => {
        const filterToDos = toDos.filter(todo => todo.id !== id);
        setToDos(filterToDos)
    }

    const editTask = (id) => {
        const task = toDos.find(todo => todo.id === id)
        setEditToDo(task)
    }

    const updateTask = (data) => {
        const {description, name} = data;
        editTodo.name = name;
        editTodo.description = description;
        editTodo.id = new Date().getTime()
        setEditToDo(null)
    }

    const toggleTask = (id) => {
        setToDos(
            toDos.map(todo => {

                    if (todo.id === id) {
                        return {...todo, completed: !todo.completed}
                    } else {
                        return todo
                    }
                }
            )
        )
    }

    return (
        <div className={'container'}>
            <div className={'wrap'}>
                <h1>Todo List: {toDos.length} </h1>


                <TodoForm
                    addTask={addTask}
                    editTodo={editTodo}
                    updateTask={updateTask}
                />

                {toDos && toDos.map(todo =>
                    <Todo key={todo.id}
                          todo={todo}
                          removeTask={removeTask}
                          editTask={editTask}
                          toggleTask={toggleTask}

                    />)}
            </div>
        </div>
    );
};

export default App;
