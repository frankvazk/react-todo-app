import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton( props ) {
    const onClickButton = () => {
        props.setOpenModal( prevState => !prevState )
    }

    return (
        <section className="CreateTodoButton">
            <button onClick={ onClickButton }>+</button>
            <p onClick={ onClickButton }>Nuevo</p>
        </section>
    )
}

export {
     CreateTodoButton
}