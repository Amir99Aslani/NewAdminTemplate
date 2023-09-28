import React from 'react';
import "../Css/SideBar.scss";
import {PiArrowSquareInDuotone, PiArrowSquareOutDuotone, PiElevatorFill} from "react-icons/pi";
import {BiNews, BiSolidMessageRoundedDetail} from "react-icons/bi";
import {GrInProgress} from "react-icons/gr";
import {IoCheckmarkDoneCircleSharp} from "react-icons/io5";
import {GiElectricalResistance} from "react-icons/gi";
import {BsCardChecklist} from "react-icons/bs";
import useWindowDimensions from "./useWindowDimensions";
import {AiFillHome} from "react-icons/ai";

function SideBar(props) {

    const {height, width} = useWindowDimensions();


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
                        <span id="nav-toggle-burger"/>
                    </label>

                </div>
                <div id="nav-content">
                    <>
                        <div className="nav-button"    onClick={() => {
                            props.onSetSideNavTest("");
                        }}>
                            <i className="fas "> <AiFillHome /></i>
                            <span>داشبورد</span>
                        </div>
                        <div className="nav-button">
                            <i className="fas "> <PiElevatorFill/></i>
                            <span>آسانسور</span>
                        </div>
                        <div className="nav-button subMenu"
                        onClick={() => {
                            props.onSetSideNavTest("اخبار");
                        }}
                        >
                            <i className="fas "> <BiNews/></i>
                            <span>اخبار</span>
                        </div>
                        <div className="nav-button subMenu"
                             onClick={() => {
                                 props.onSetSideNavTest(" درحال انجام");
                             }}
                        >
                            <i className="fas "> <GrInProgress/></i>
                            <span> درحال انجام</span>
                        </div>
                        <div className="nav-button subMenu"
                             onClick={() => {
                                 props.onSetSideNavTest("صادر شده");
                             }}
                        >
                            <i className="fas "> <IoCheckmarkDoneCircleSharp/></i>
                            <span>صادر شده</span>
                        </div>
                    </>

                    <>
                        <div className="nav-button">
                            <i className="fas "> <GiElectricalResistance/></i>
                            <span>تابلو برق</span>
                        </div>
                        <div className="nav-button subMenu"
                            onClick={() => {
                                 props.onSetSideNavTest("درخواست اولیه");
                             }}
                        >
                            <i className="fas "> <BsCardChecklist/></i>
                            <span>درخواست اولیه</span>
                        </div>
                        <div className="nav-button subMenu"
                            onClick={() => {
                                 props.onSetSideNavTest("درحال انجام");
                             }}
                        >
                            <i className="fas "> <GrInProgress/></i>
                            <span>درحال انجام</span>
                        </div>
                        <div className="nav-button subMenu"
                            onClick={() => {
                                 props.onSetSideNavTest("پایان یافته");
                             }}
                        >
                            <i className="fas "> <IoCheckmarkDoneCircleSharp/></i>
                            <span>پایان یافته</span>
                        </div>
                    </>

                    <>
                        <div className="nav-button">
                            <i className="fas "> <BiSolidMessageRoundedDetail/></i>
                            <span>پیام</span>
                        </div>
                        <div className="nav-button subMenu" onClick={() => {
                            props.onSetSideNavTest("ورودی");
                        }}>
                            <i className="fas "> <PiArrowSquareInDuotone/></i>
                            <span>ورودی</span>
                        </div>
                        <div className="nav-button subMenu" onClick={() => {
                            props.onSetSideNavTest("خروجی");
                        }}>
                            <i className="fas "> <PiArrowSquareOutDuotone/></i>
                            <span>خروجی</span>
                        </div>
                    </>


                    <div id="nav-content-highlight"/>
                </div>
                <input id="nav-footer-toggle" type="checkbox"/>
                {/*<div id="nav-footer">*/}
                {/*    <div id="nav-footer-heading">*/}
                {/*        <div id="nav-footer-avatar">*/}
                {/*            <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547"/>*/}
                {/*        </div>*/}
                {/*        <div id="nav-footer-titlebox">*/}
                {/*            <a*/}
                {/*                id="nav-footer-title"*/}
                {/*                href="https://codepen.io/uahnbu/pens/public"*/}
                {/*                target="_blank"*/}
                {/*            >*/}
                {/*                uahnbu*/}
                {/*            </a>*/}
                {/*            <span id="nav-footer-subtitle">Admin</span>*/}
                {/*        </div>*/}
                {/*        <label htmlFor="nav-footer-toggle">*/}
                {/*            <i className="fas fa-caret-up"/>*/}
                {/*        </label>*/}
                {/*    </div>*/}
                {/*    <div id="nav-footer-content">*/}
                {/*        <lorem>*/}
                {/*            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor*/}
                {/*            incididunt ut labore et dolore magna aliqua.*/}
                {/*        </lorem>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    );
}

export default SideBar;