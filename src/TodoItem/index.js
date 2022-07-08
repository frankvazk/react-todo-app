import React from "react";
import { CompleteIcon } from "../CompleteIcon";
import { DeleteIcon } from "../DeleteIcon";
import './TodoItem.css'

function TodoItem( props ) {    
    return (
        <li className="TodoItem">
            <CompleteIcon completed={props.completed } onComplete={ props.onComplete } ></CompleteIcon>            
            <p 
            className={`text-control ${ props.completed && 'text-control-completed' }`}
            onClick={ props.onComplete }
            >
                { props.text }
            </p>
            <DeleteIcon onDelete={ props.onDelete }></DeleteIcon>            
        </li>
    )
}

export {
    TodoItem
}