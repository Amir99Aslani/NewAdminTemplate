import React, {useCallback, useEffect, useState, useContext, useRef} from 'react';
import "../Css/adminpanel.scss"
import {LoginContext} from "../../Root";
import 'react-spring-modal/styles.css';
import Scrollbars from "react-custom-scrollbars-2";
import SideBar from "../wedgits/SideBar";
import useWindowDimensions from "../wedgits/useWindowDimensions";

function Dashboard(props) {

    const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext);
    const [sideNavW, setSideNavW] = useState(false);
    const [sideNavTest, setSideNavTest] = useState("");

    const {height, width} = useWindowDimensions();

    useEffect(() => {
    }, []);

    return (

        <div id="background">
            <div id="firstbox">
                <SideBar
                    onSetSideNavW={setSideNavW}
                    onSetSideNavTest={setSideNavTest}
                />
                <div className="mainContent"
                     style={width > 400 ? {width: sideNavW ? "90%" : "78%"} : {width: sideNavW ? "80%" : "68%"}}>
                    < Scrollbars
                        autoHide
                        autoHideTimeout={1000}
                        style={{
                            scrollbarColor: "#fff"
                        }}
                    >
                        <br/>
                        <h1 className="companyTitle">
                            شرکت کاوش اندیشه رستگار
                            <br/>
                            <span>
                    شعبه خراسان رضوی
                    </span>
                        </h1>

                        {sideNavTest.length === 0 ?
                            <div className="topItems">
                                <div className="Items">
                                    تاریخ و ساعت
                                </div>
                                <div className="Items">سامانه مدیریت بازرسی آسانسور</div>
                                <div className="Items">سامانه تایید شرکت برق</div>
                                <div className="Items">ثبت درخواست اداری</div>
                            </div>
                            :
                            <div className="MainItem">
                                <h3 className="Items">
                                    {sideNavTest}
                                </h3>
                            </div>
                        }



                    </Scrollbars>
                </div>
            </div>

        </div>

    )
        ;
}

export default Dashboard;