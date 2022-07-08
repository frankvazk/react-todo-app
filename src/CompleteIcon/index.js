import React from "react";
import { TodoIcon } from "../TodoIcon";

function CompleteIcon( { completed, onComplete } ) {
    return <TodoIcon type="complete" iconClass={`check-control ${ completed && 'check-control-completed' }`} action={ onComplete } ></TodoIcon>
}

export { CompleteIcon }