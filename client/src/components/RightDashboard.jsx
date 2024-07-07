import React from "react";
import ItemList from "./Home/ItemList";

const RightDashboard = () => {
    return (
        <div className="main-content">            
            <div className="mt-5">
                <form action="" className="form">
                    <label htmlFor="searchTask" className="fw-semibold">Search task</label>
                    <input className="form-control shadow-none border-0 p-2" id="searchTask" type="text" />
                </form>
            </div>
            <div className="page-conent mt-4">
                <ul className="task-container">

                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                </ul>
            </div>
        </div>
    );
};

export default RightDashboard;
