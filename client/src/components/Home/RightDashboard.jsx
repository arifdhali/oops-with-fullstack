import React from "react";
import { FaDotCircle } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const RightDashboard = () => {
    return (
        <div className="main-content">
            <div className="page-healine">
                <span>Today main focus </span>
                <h3>Task 2</h3>
            </div>
            <div className="mt-5">
                <form action="" className="form">
                    <label htmlFor="searchTask" className="fw-semibold">Search task</label>
                    <input className="form-control shadow-none border-0 p-2" id="searchTask" type="text" />
                </form>
            </div>
            <div className="page-conent mt-4">
                <ul className="task-container">
                    <li className="task-item p-3 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <FaDotCircle fill="red" className="me-3" />
                            <div className="task-name">
                                New project
                            </div>
                        </div>
                        <div className="d-flex align-items-center task-info">
                            <IoMdCheckmarkCircleOutline fill="#a18aff" className="mx-2" />
                        </div>
                    </li>
                    <li className="task-item p-3 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <FaDotCircle fill="blue" className="me-3" />
                            <div className="task-name">
                                New project
                            </div>
                        </div>
                        <div className="d-flex align-items-center task-info">
                            <span className="mx-2">
                                08:00 a:m
                            </span>
                            <IoMdCheckmarkCircleOutline fill="#a18aff" className="mx-2" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RightDashboard;
