import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){
    const [ newTodoValue, setNewTodoValue ] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext( TodoContext )

    const onCancel = () => {
        setOpenModal( false )
    }

    const onSubmit = ( event ) => {   
        event.preventDefault(); 
        addTodo( newTodoValue );    
        setOpenModal( false )
    }

    const onChange = ( event ) => {
        setNewTodoValue( event.target.value );
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Nuevo To Do</label>
            <textarea
                placeholder="Cortar la cebolla para el almuerzo"
                value={ newTodoValue }
                onChange={ onChange }
                rows="12"
            ></textarea>
            <div className="button_panel"> 
                <button 
                    className="left cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="right"
                    type="submit"                    
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }