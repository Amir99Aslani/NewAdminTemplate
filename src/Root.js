import React, {createContext, useState, Suspense} from "react";
import LoadingSpinner from "./component/wedgits/LoadingSpinner";
import {Navigate, Route, Routes} from "react-router-dom";
import axios from "axios";


export const LoginContext = createContext();


const Root = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("token") != null
    );

    // axios.defaults.baseURL = 'http://192.168.2.12:8521/';
    // axios.defaults.baseURL = 'http://192.168.2.50:8521/';
    axios.defaults.baseURL = 'https://api.thelinearch.com/';

    const Dashboard = React.lazy(() => import('./component/Pages/Dashboard.js'));
    const LogIn = React.lazy(() => import('./component/Pages/LogIn'));

    return (
        <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            <Routes>
                <Route
                    element={
                        <Suspense fallback={<LoadingSpinner/>}>
                            <LogIn/>
                        </Suspense>
                    }
                    exact
                    path="/"
                />
                <Route
                    element={
                        <Suspense fallback={<LoadingSpinner/>}>
                            <Dashboard/>
                        </Suspense>
                    }
                    exact
                    path="/Dashboard"
                />

                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>

        </LoginContext.Provider>

    );
};

export default Root;