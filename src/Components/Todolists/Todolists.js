import React, { useEffect, useState } from 'react';
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
            
        </div>
    );
};

export default Todolists;