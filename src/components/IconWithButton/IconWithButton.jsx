import React from 'react'

const IconWithButton = ({ border, color, text, icon }) => {
    return (
        <button className={`px-2 md:px-4 border ${border ? border : "border-white/80"} ${color ? color : "text-white/80"} text-sm md:text-base lg:text-xl w-max h-12 rounded-full flex items-center justify-center md:gap-3`}>
            <img src={icon} alt="crown icon" className='w-5 h-5 md:w-6 md:h-6' />
            <span className='font-thin'>{text}</span>
        </button>
    )
}

export default IconWithButton