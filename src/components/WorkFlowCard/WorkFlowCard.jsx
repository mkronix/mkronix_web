import React from "react";
import halfArrow from "../../assets/icon/half-arrow.svg";

const WorkFlowCard = ({ number, title, description, onClick }) => {
    return (
        <div className={`w-[350px] max-md:w-full h-full
            p-12 md:p-6 rounded-md relative border border-neutral-800 
            animate-shimmer  bg-[linear-gradient(110deg,#000103,45%,#272727,55%,#000103)] bg-[length:200%_100%] transition-colors
        `}
        >
            <div
                className="text-off-white
                h-full rounded-lg flex flex-col justify-center hover:cursor-pointer group"
                onClick={onClick}
            >
                {number && (
                    <span className="absolute top-4 left-4 text-off-white text-lg lg:text-xl">{number}</span>
                )}
                <h1 className="text-2xl md:text-3xl font-semibold mb-3">{title}</h1>
                {description && (
                    <p className="text-off-white text-base mb-6">
                        {description}
                    </p>
                )}
                <div className="absolute bottom-4 right-4">
                    <img
                        src={halfArrow}
                        alt="arrow"
                        className="w-10 h-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                    />
                </div>
            </div>
        </div>
    );
};

export default WorkFlowCard;
