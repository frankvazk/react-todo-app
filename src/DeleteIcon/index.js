import React from "react";
import { TodoIcon } from "../TodoIcon";

function DeleteIcon( { onDelete } ){
    return <TodoIcon type="delete" action={ onDelete } iconClass="delete-control" ></TodoIcon>
} 

export { DeleteIcon }