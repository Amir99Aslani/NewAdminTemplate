import React, {useCallback, useEffect, useState, useRef, useContext} from 'react';
import "../Css/LoiIn.css";
import axios from "axios";
import toast, {Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {LoginContext} from "../../Root";
import {CircularProgress} from "@mui/material";

function LogIn(props) {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [firstStep, setFirstStep] = useState(true);
    const [error, setError] = useState(null);
    const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext);

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
            <div className="LogInContainer">

                <form className="LogInForm" onSubmit={firstStep ? SendCode : LogIn}>
                    {firstStep ? <div>
                        <label>شماره همراه</label>
                        <input type="text" ref={phoneNumberRef} value={phoneNumber} onChange={(e) => {
                            setPhoneNumber(e.target.value)
                        }}/>
                    </div>
                    :
                        <div>
                            <label htmlFor="">کد ارسال شده</label>
                            <input type="password" ref={PasswordRef} value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }}/>
                        </div>
                    }


                    {/*<div>*/}
                    {/*    <label htmlFor="">رمز یکبار مصرف</label>*/}
                    {/*    <input type="text"/>*/}
                    {/*</div>*/}
                    {/*<button type="button" className="button1">استفاده از کلید سخت افزاری</button>*/}
                    {isLoading ?
                        <button type="button" className="button2" disabled={isLoading}><CircularProgress/></button> :
                        (
                            firstStep ?
                                <button type="submit"
                                        className="button2" disabled={isLoading}>ارسال کد</button>
                                :
                                <button type="submit"
                                        className="button2" disabled={isLoading}>ورود</button>
                        )


                    }

                </form>
            </div>
        </div>

    );
}

export default LogIn;