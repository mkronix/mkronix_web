import React from "react";
import './ButtonBestia.css';
const ButtonBestia = ({ width, height, children }) => {
    return (
        <div className={`${width ? width : "w-full"} ${height ? height : "h-full"} flex justify-center items-center relative `}>
            <button className="button--bestia text-3xl text-white">
                <div className={`button__bg absolute top-0 left-0 ${width ? width : "w-full"} ${height ? height : "h-full"} rounded-xl overflow-hidden bg-white`}></div>
                <span className="mix-blend-difference w-full text-center">{children}</span>
            </button>
        </div>
    );
};

export default ButtonBestia;
