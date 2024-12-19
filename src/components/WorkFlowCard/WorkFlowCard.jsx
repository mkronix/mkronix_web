import React from "react";
import halfArrow from "../../assets/icon/half-arrow.svg";

const WorkFlowCard = ({ number, title, description, onClick }) => {
    return (
        <div
            className="bg-[#141313] max-md:h-[350px] shadow-lg shadow-[#141313] text-white rounded-lg p-3 md:p-6 flex flex-col justify-center  relative hover:cursor-pointer group"
            onClick={onClick}
        >
            {/* Step Number */}
            <div className="absolute top-4 left-4 text-white/90 text-lg lg:text-xl">{number}</div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">{title}</h3>

            {/* Description */}
            <p className="text-white/70 text-base mb-6">{description}</p>

            {/* Arrow */}
            <div className="absolute bottom-4 right-4">
                <img
                    src={halfArrow}
                    alt="arrow"
                    className="w-10 h-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                />
            </div>
        </div>
    );
};

export default WorkFlowCard;
