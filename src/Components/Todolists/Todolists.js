import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';
import './Todolists.css'
const Todolists = () => {
    const [todoLists, setTodolist] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodolist(data))
    }, [])
    return (
        <div>
            <h1>Total TodoList : </h1>
            {
                todoLists.map(todo => <Todo
                    todo={todo}
                ></Todo>)
            }
        </div>
    );
};

export default Todolists;