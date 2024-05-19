import React, {useCallback, useEffect, useState, useContext, useRef} from 'react';
import "../Css/adminpanel.scss"
import {LoginContext} from "../../Root";
import 'react-spring-modal/styles.css';
import Scrollbars from "react-custom-scrollbars-2";
import SideBar from "../wedgits/SideBar";
import useWindowDimensions from "../wedgits/useWindowDimensions";
import {Theme} from "../wedgits/ThemeContext";
import ThemeIcoLight from "../Css/Ico/ThemeIcoLight";
import ThemeIcoDark from "../Css/Ico/ThemeIcoDark";

function Dashboard(props) {

    const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext);
    const [sideNavW, setSideNavW] = useState(false);
    const [sideNavTest, setSideNavTest] = useState("");

    const {height, width} = useWindowDimensions();
    const theme = useContext(Theme);
    const [distributeData, setDistributeData] = useState("");

    useEffect(() => {
    }, []);

    return (

        <div id="background">
            <div id="firstbox">
                <SideBar
                    onSetSideNavW={setSideNavW} ondistributeData={distributeData}
                    onSetSideNavTest={setSideNavTest} onSetdistributeData={setDistributeData}
                />
                <div className="mainContent"
                     style={width > 400 ? {width: sideNavW ? "90%" : "78%"} : {width: sideNavW ? "80%" : "68%"}}>
                    <div className="themeContainer">
                        <div className="themeController">
                            <button onClick={theme.themeChanger}>
                                {theme.theme === "light" ? <ThemeIcoLight /> : <ThemeIcoDark/>}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;
