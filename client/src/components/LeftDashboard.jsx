import React, { useState } from "react";
import { MdOutlineAddTask } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link,  useNavigate } from "react-router-dom";

import Logo from "../assets/logo.png";
import axios from "axios";

const LeftDashboard = () => {
    const navigate = useNavigate();
    const [logOut, setLogOut] = useState('');


    const handelLogout = async (e) => {
        e.preventDefault();
        const confirmLogout = confirm("Do you want to logout?");
        if (confirmLogout) {
            try {
                let response = await axios.post(`${process.env.BASE_URL}/auth/logout`);
                if (response.status === 200) {
                    setLogOut(response.data.status);
                    console.log(response.data.message);
                    // Redirect to login after successful logout
                    if(response.data.status){
                        navigate("/login");
                    }
                }
            } catch (err) {
                console.log(err);
            }
        }
    };
    return (
        <div className="col-2">
            <div className="left-bar pb-5 position-relative h-100">
                <div className="logo-area text-center mb-2">
                    <Link to={'/'}>
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
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
                    <button onClick={handelLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LeftDashboard;
