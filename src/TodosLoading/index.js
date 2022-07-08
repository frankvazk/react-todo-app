import React from "react";
import './TodosLoading.css'

function TodosLoading() {    
    return (
        <React.Fragment>    
            <li className="loading-item">
                <span className="loading-check-control"></span>
                <div className="loading-text-control" >
                    <div></div>
                    <div className="small"></div>
                </div>
                <span  className="loading-delete-control"></span>
            </li>
            <li className="loading-item">
                <span className="loading-check-control"></span>
                <div className="loading-text-control" >
                    <div></div>
                    <div className="medium"></div>
                </div>
                <span  className="loading-delete-control"></span>
            </li>
            <li className="loading-item">
                <span className="loading-check-control"></span>
                <div className="loading-text-control" ><div></div><div></div></div>
                <span  className="loading-delete-control"></span>
            </li>
            <li className="loading-item">
                <span className="loading-check-control"></span>
                <div className="loading-text-control" >
                    <div></div>
                    <div className="small"></div>
                </div>
                <span  className="loading-delete-control"></span>
            </li>
            <li className="loading-item">
                <span className="loading-check-control"></span>
                <div className="loading-text-control" >
                    <div></div>
                    <div className="medium"></div>
                </div>
                <span  className="loading-delete-control"></span>
            </li>
            <li className="loading-item">
                <span className="loading-check-control"></span>
                <div className="loading-text-control" ><div></div><div></div></div>
                <span  className="loading-delete-control"></span>
            </li>
            <li className="loading-item">
                <span className="loading-check-control"></span>
                <div className="loading-text-control" >
                    <div></div>
                    <div className="small"></div>
                </div>
                <span  className="loading-delete-control"></span>
            </li>                       
        </React.Fragment>);
}

export { TodosLoading }