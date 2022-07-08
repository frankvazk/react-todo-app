import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch() {    
    const { searchValue, setSearchValue } = React.useContext( TodoContext );

    const onTodoSearchCange = ( event ) => {
        setSearchValue( event.target.value )
    }

    return (
        <input 
            onChange={ onTodoSearchCange }
            className="search-text" 
            type="text" 
            value={searchValue}
            placeholder="Cebolla"></input>
    )
}

export {
    TodoSearch
}