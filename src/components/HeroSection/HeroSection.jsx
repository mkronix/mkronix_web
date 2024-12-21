import React from 'react'
import MarqueeText from '../marquetext/MarqueeText'
import { FlipWords } from '../FlipWords/FlipWords'
import { TypewriterEffectSmooth } from '../TypewriterEffect/TypewriterEffect'
import BoxesLayer from '../BoxesLayer/BoxesLayer'

const HeroSection = () => {


    const textMarqueData = [
        "WEB DESIGN",
        "●",
        "UI/UX DESIGN",
        "●",
        "APPLICATIONS",
        "●",
        "GRAPHICS",
        "●",
        "BRANDING",
        "●",
        "LOGO",
        "●",
        "MARKETING",
        "●"
    ]

    const words = [
        "brand",
        "business",
        "products",
        "services",
    ]

    const typeText = [
        {
            text: "Lost",
        },
        {
            text: "in",
        },
        {
            text: "the",
        },
        {
            text: "noise?",
        },
        {
            text: "It’s",
        },
        {
            text: "Time",
        },
        {
            text: "to",
        },
        {
            text: "Stand Out."
        },
    ];
    return (
        <section className="relative md:pt-20 pt-12 max-md:px-2 px-5 flex flex-col overflow-hidden h-screen">
            <BoxesLayer />
            <div className={`max-md:px-3 flex flex-col relative`}>
                <TypewriterEffectSmooth words={typeText} className='text-white' />
                <p className="relative z-10 font-light font-sans flex gap-2 text-white/70 leading-dynamic-p text-dynamic-p items-center">
                    Your <FlipWords words={words} className={'text-white'} /> deserves better.
                </p>
                <p className="relative z-10 font-light font-sans flex text-white/70 leading-dynamic-p text-dynamic-p">
                    Stand out with a digital presence they’ll always remember
                </p>
            </div>
            <div className="flex my-28 flex-col items-center gap-0 md:gap-4">
                <div
                    className="transform md:rotate-[-9deg] rotate-[-20deg] will-change-transform"
                    style={{
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                    }}
                >
                    <MarqueeText
                        textData={textMarqueData}
                        className="bg-white"
                        direction="rtl"
                        speed={0.3}
                        key="mobile--text-marquee-1"
                        isMobile={true}
                    />
                </div>

                <div
                    className="transform md:rotate-[9deg] rotate-[20deg] will-change-transform"
                    style={{
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden',
                    }}
                >
                    <MarqueeText
                        textData={textMarqueData}
                        className="bg-white"
                        direction="ltr"
                        speed={0.7}
                        key="mobile--text-marquee-2"
                        isMobile={true}
                    />
                </div>

            </div>
        </section>
    )
}

export default HeroSection