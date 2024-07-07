import React from "react";
import { BiTask } from "react-icons/bi";
import { MdOutlineAddTask } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";

const LeftDashboard = () => {
    return (
        <div className="col-2">
            <div className="left-bar py-5 position-relative h-100">
                <div className="user-info d-flex align-items-center">
                    <img
                        className="user-img"
                        src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg"
                        alt=""
                    />
                    <div className="ms-3">
                        <strong>Hamza mameri</strong>
                    </div>
                </div>
                <nav className="menu">
                    <ul className="menu-list">
                        {/* <li className="menu-item">
                            <Link to={"/task"} className="menu-link">
                                <BiTask /> Tasks
                            </Link>
                        </li> */}
                        <li className="menu-item">
                            <Link to={"/add-task"} className="menu-link">
                                <MdOutlineAddTask /> Add Tasks
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="log-out d-flex align-items-center">
                    <span>
                        <RiLogoutCircleRLine />
                    </span>
                    <a href="">Logout</a>
                </div>
            </div>
        </div>
    );
};

export default LeftDashboard;
