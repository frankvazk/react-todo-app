import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

function TodoCounter() {
    const { completedTodos, pendingTodos } = React.useContext( TodoContext );

    return (
        <p className='TodoCounter'>{ completedTodos } terminados - { pendingTodos } pendientes</p>
    )
}

export { 
    TodoCounter 
}