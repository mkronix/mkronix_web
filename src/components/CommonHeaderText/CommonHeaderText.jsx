import React from 'react'
import { RetroGrid } from '../RetroGrid/RetroGrid'
import StaggeredText from '../StaggeredText/StaggeredText'

const CommonHeaderText = ({ text }) => {
    return (
        <div className="relative z-10 font-lorimer pointer-events-none flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
            <StaggeredText words={text} delay={0.05} />
            <RetroGrid />
        </div>
    )
}

export default CommonHeaderText