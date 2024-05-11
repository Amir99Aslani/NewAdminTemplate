import React, {useCallback, useContext, useState} from 'react';
import "../Css/SideBar.scss";
import {PiArrowSquareInDuotone, PiArrowSquareOutDuotone, PiElevatorFill} from "react-icons/pi";
import {BiNews, BiSolidMessageRoundedDetail} from "react-icons/bi";
import {GrInProgress} from "react-icons/gr";
import {IoCheckmarkDoneCircleSharp, IoMenu, IoQrCodeOutline} from "react-icons/io5";
import {GiElectricalResistance} from "react-icons/gi";
import {BsCardChecklist} from "react-icons/bs";
import useWindowDimensions from "./useWindowDimensions";
import {AiFillHome} from "react-icons/ai";
import DashboardIco from "../Css/Ico/DashboardIco";
import {MdOutlineRestaurantMenu} from "react-icons/md";
import {FaTags} from "react-icons/fa";
import axios from "axios";
import {LoginContext} from "../../Root";
import {Theme} from "./ThemeContext";

function SideBar(props) {

    const {height, width} = useWindowDimensions();

    const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext);
    const theme = useContext(Theme);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);


    return (
        <>
            <div id="nav-bar">
                <input id="nav-toggle" type="checkbox" defaultChecked={width < 900} onChange={(event) => {
                    props.onSetSideNavW(event.currentTarget.checked);
                }}/>
                <div id="nav-header">
                    <a id="nav-title" href="https://codepen.io" target="_blank">
                        Vira
                    </a>
                    <label htmlFor="nav-toggle">
                        <IoMenu />
                    </label>

                </div>
                <div id="nav-content">
                    <>
                        <div className="nav-button" onClick={() => {
                            props.ondistributeData("");
                        }}>
                            <i className="fas "> <DashboardIco/></i>
                            <span>داشبورد</span>
                        </div>
                        <div className="nav-button"
                             onClick={() => {
                                 props.ondistributeData("menu");
                             }}>
                            <i className="fas "> <MdOutlineRestaurantMenu/></i>
                            <span>منو</span>
                        </div>
                        <div className="nav-button subMenu"
                             onClick={() => {
                                 props.ondistributeData("tag");
                             }}
                        >
                            <i className="fas "> <FaTags /></i>
                            <span>لیست تگ ها</span>
                        </div>

                    </>


                    <div id="nav-content-highlight"/>

                    <button className="getQRBtn nav-button" >
                        <i className="fas "> <IoQrCodeOutline /></i>
                        <span>دریافت QR کد</span>
                    </button>
                </div>
                <input id="nav-footer-toggle" type="checkbox"/>

            </div>
        </>
    );
}

export default SideBar;
