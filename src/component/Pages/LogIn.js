import React, {useCallback, useEffect, useState, useRef, useContext} from 'react';
import "../Css/LoiIn.scss";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {LoginContext} from "../../Root";
import {CircularProgress} from "@mui/material";
import ThemeIcoLight from "../Css/Ico/ThemeIcoLight";
import ThemeIcoDark from "../Css/Ico/ThemeIcoDark";
import {Theme} from "../wedgits/ThemeContext";

function LogIn(props) {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [firstStep, setFirstStep] = useState(true);
    const [error, setError] = useState(null);
    const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext);

    const theme = useContext(Theme);

    const UsernameRef = useRef("");
    const PasswordRef = useRef("");
    const phoneNumberRef = useRef("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [tmpToken, setTmpToken] = useState("");

    const SendCode = useCallback(async (event) => {
        setIsLoading(true);
        setError(null);

        event.preventDefault();

        // const data = {
        //     "phone_number": phoneNumberRef.current.value
        // };
        //
        // try {
        //     const response = await axios.post("/v1/pa/admins/auth/phone_number", data)
        //
        //     const token = (await response);
        //
        //     if (token.status == 200) {
        //         setTmpToken(token.data.data.tmp_token);
                setFirstStep(false);
        //     }
        //
        // } catch (err) {
        //     // console.log(err.response.data.errors);
        //     toast.error('Wrong Username Or Password !');
        // }
        //
        // setTimeout(() => {
        //     setIsLoading(false);
        // }, 1000);

        setIsLoading(false);

    }, [])

    const LogIn = useCallback(async (event) => {
        setIsLoading(true);
        setError(null);

        event.preventDefault();
        toast.success('خوش آمدید');
        setIsLoggedIn(true);
        setTimeout(() => {
                        navigate("/Dashboard");
                        setIsLoading(false);
                    } , 2000);

        // const data = new URLSearchParams({username: UsernameRef.current.value, password: PasswordRef.current.value})

        // const data = {
        //     "phone_number": phoneNumber,
        //     "tmp_token": tmpToken,
        //     "verf_code": PasswordRef.current.value
        // }
        //
        // try {
        //     const response = await axios.post("/v1/pa/admins/auth/login", data)
        //
        //     const token = (await response);
        //
        //     if (token.status == 200) {
        //         // console.log(token);
        // toast.success('خوش آمدید');
                // localStorage.setItem("token", "Bearer " + token.data.data.access_token);
                // setIsLoggedIn(true);
        //         setTimeout(() => {
        //             navigate("/Dashboard");
        //             setIsLoading(false);
        //         } , 2000);
        //     }
        //
        // } catch (err) {
        //     console.log(err.response.data.errors);
        //     toast.error('Wrong Username Or Password !');
        // }
        //
        // setTimeout(() => {
        //     setIsLoading(false);
        // }, 1000);

        // setIsLoading(false);

    }, [])


    return (
        <div className="container">

            <div className="logInNavBar">
                <div className="logoContainer" style={{backgroundImage:`url(lol)`}}></div>
                <div className="themeController">
                    <button onClick={theme.themeChanger}>
                        {theme.theme === "light" ? <ThemeIcoLight /> : <ThemeIcoDark/>}
                    </button>
                </div>
            </div>

            <div className="LogInContainer">

                <form className="LogInForm" onSubmit={firstStep ? SendCode : LogIn}>
                    {firstStep ? <div className="container">
                            <h4>شماره همراه</h4>
                            <input className="phoneNumber"
                                   maxLength='11'
                                   placeholder='09*********'
                                   autoComplete="off" type="text" ref={phoneNumberRef} value={phoneNumber}
                                   onChange={(e) => {
                                       setPhoneNumber(e.target.value)
                                   }}/>
                        </div>
                        :
                        <div className="container">
                            <h4>کد ارسال شده</h4>
                            <input className="code"
                                   maxLength='6'
                                   placeholder='123456'
                                   autoComplete="off" type="password" ref={PasswordRef} value={password}
                                   onChange={(e) => {
                                       setPassword(e.target.value)
                                   }}/>
                        </div>
                    }


                    {/*<div>*/}
                    {/*    <label htmlFor="">رمز یکبار مصرف</label>*/}
                    {/*    <input type="text"/>*/}
                    {/*</div>*/}
                    {/*<button type="button" className="button1">استفاده از کلید سخت افزاری</button>*/}

                    <div className="btnContainer">
                        {isLoading ?
                            <button type="button" className="button2" disabled={isLoading}><CircularProgress size={20}/>
                            </button> :
                            (
                                firstStep ?
                                    <button type="submit"
                                            className="button2" disabled={isLoading}>
                                        <span>
                                            ارسال کد
                                        </span>
                                    </button>
                                    :
                                    <button type="submit"
                                            className="button2" disabled={isLoading}>
                                        <span>
                                            ورود
                                        </span>
                                    </button>
                            )
                        }
                    </div>

                </form>
            </div>
            {/*<div className="LogInContainer">*/}

            {/*    <form className="LogInForm" onSubmit={firstStep ? SendCode : LogIn}>*/}

            {/*        <div className="UPContainer">*/}
            {/*            <h4>UserName :</h4>*/}
            {/*            <input className="input"*/}
            {/*                   maxLength='11'*/}
            {/*                   placeholder='09*********'*/}
            {/*                   autoComplete="off" type="text"/>*/}
            {/*        </div>*/}
            {/*        <div className="UPContainer">*/}
            {/*            <h4>Password :</h4>*/}
            {/*            <input className="input"*/}
            {/*                   maxLength='11'*/}
            {/*                   placeholder='09*********'*/}
            {/*                   autoComplete="off" type="text" />*/}
            {/*        </div>*/}

            {/*        <div className="btnContainer">*/}
            {/*            {isLoading ?*/}
            {/*                <button type="button" className="button2" disabled={isLoading}><CircularProgress size={20}/>*/}
            {/*                </button> :*/}
            {/*                        <button type="submit"*/}
            {/*                                className="button2" disabled={isLoading}>*/}
            {/*                            <span>*/}
            {/*                                ورود*/}
            {/*                            </span>*/}
            {/*                        </button>*/}
            {/*            }*/}
            {/*        </div>*/}

            {/*    </form>*/}
            {/*</div>*/}
        </div>

    );
}

export default LogIn;
