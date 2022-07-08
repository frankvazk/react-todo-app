import React from "react";

function TodoIcon({ type, iconClass, action }) {
    const iconTypes = {
        "complete"  : "C",
        "delete"    : "-"
    }

    return  <span 
                className={`check-control ${ iconClass }`}
                onClick={ action }
            >{ iconTypes[type] }</span>;
}

export { TodoIcon }