import React from 'react';

const Todo = (props) => {
    const { id, title, completed } = props.todo;
    return (
        <div className='todo'>
            <h3>Id : {id}</h3>
            <p>Title : {title}</p>
            <p>Completed : {completed + ''}</p>
        </div>
    );
};

export default Todo;


























































