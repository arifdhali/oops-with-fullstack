// DashboardLayout.js
import React, { useContext, useEffect, useState } from 'react';
import { LeftDashboard } from './components';
import { MainContext } from './context/UserContext';
import { useNavigate } from 'react-router-dom';


const DashboardLayout = ({ children }) => {    
    const navigate = useNavigate();
    const { userInfo } = useContext(MainContext);
    const { status } = userInfo;
    useEffect(() => {
        if (!status) {
            navigate("/auth/login");
        }
    }, [status])

    return (
        <div className="row vh-100 p-3">
            <LeftDashboard />

            <div className="col-10">
                <div className="right-bar p-5 h-100">
                    <div className="page-headline">
                        <span>Today main focus </span>
                        <h3>Latest task with 08:00 am</h3>
                    </div>
                    <div className="page-content mt-5">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
