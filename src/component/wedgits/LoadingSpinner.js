import React from 'react';
import "../Css/LoadingSpinner.scss"

const LoadingSpinner = () => {
    return (
        <div className="Body">
            <div className="boxes">
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
