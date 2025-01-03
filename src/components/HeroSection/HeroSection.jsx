import React from 'react'
import BoxesLayer from '../BoxesLayer/BoxesLayer'
import { FlipWords } from '../FlipWords/FlipWords'
import { TypewriterEffectSmooth } from '../TypewriterEffect/TypewriterEffect'
import { VelocityScroll } from '../VelocityScroll/VelocityScroll'
import { textMarqueData, typeText, words } from '../../data/herosection'
const HeroSection = () => {

    return (
        <>
            <section id='home' className="relative z-10 pointer-events-none md:pt-20 pt-12 max-md:px-2 px-5 flex flex-col">
                <BoxesLayer />
                <div className={`max-md:px-3 flex flex-col max-w-full relative z-10 pointer-events-none`}>
                    <TypewriterEffectSmooth words={typeText} className='text-off-white hover:text-off-white transition-all duration-500 font-lorimer' />
                    <div className="relative my-4 z-10 font-light flex gap-2 text-off-white hover:text-off-white transition-all duration-500 leading-dynamic-p text-dynamic-p items-center">
                        Your <FlipWords words={words} className={'text-off-white'} /> deserves better.
                    </div>
                    <p className="relative z-10 font-light flex text-off-white hover:text-off-white transition-all duration-500 leading-dynamic-p text-dynamic-p">
                        Stand out with a digital presence they’ll always remember
                    </p>
                </div>
            </section>
            <div className="font-lorimer relative z-10 pointer-events-none flex my-28 flex-col items-center gap-0 md:gap-4">
                <div
                    className="transform md:rotate-[-9deg] rotate-[-20deg] will-change-transform"
                    style={{
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                    }}
                >
                    <VelocityScroll text={textMarqueData} className={'bg-white h-12 md:text-3xl sm:text-2xl text-xl'}
                        default_velocity={1}
                    />
                </div>

                <div
                    className="transform md:rotate-[9deg] rotate-[20deg] will-change-transform"
                    style={{
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                    }}
                >
                    <VelocityScroll text={textMarqueData} className={'bg-white h-12 md:text-3xl sm:text-2xl text-xl'}
                        default_velocity={-1}
                    />
                </div>

            </div>
        </>
    )
}

export default HeroSection