import React from 'react'
import { RetroGrid } from '../RetroGrid/RetroGrid'

const CommonHeaderText = ({ text }) => {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
            <h1 className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#bdbdbd] via-[#ffffff] to-[#5e5e5e] bg-clip-text text-center text-5xl lg:text-7xl font-bold leading-none tracking-tighter text-transparent">
                {text}
            </h1>
            <RetroGrid />
        </div>
    )
}

export default CommonHeaderText