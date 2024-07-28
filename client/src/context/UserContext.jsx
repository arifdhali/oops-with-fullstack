import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// Create Context
const MainContext = createContext();

// Create Provider Component

// get home route
const getHomeRoutes = async () => {
    try {
        let response = await axios.get("http://localhost:4000/");
        return response.data;
    }
    catch (err) {
        console.log(err);
        return null;
    }

}

const UserContext = ({ children }) => {
    const [fetchValue, setFetchValue] = useState("");

    useEffect(() => {
        async function fetchRoute() {
            let res = await getHomeRoutes();
            setFetchValue(res);
        }
        fetchRoute();
    }, []);

    return (
        <MainContext.Provider value={{ userInfo: fetchValue }}>
            {children}
        </MainContext.Provider>
    );
};

// Named exports for easier import
export { MainContext, UserContext };
``