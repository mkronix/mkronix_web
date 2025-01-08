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
                    <TypewriterEffectSmooth words={typeText} className='text-off-white hover:text-off-white transition-all duration-500 ' />
                    <div className="relative my-4 z-10 font-light flex gap-2 text-off-white hover:text-off-white transition-all duration-500 leading-dynamic-p text-dynamic-p items-center">
                        Your <FlipWords words={words} className={'text-off-white'} /> deserves better.
                        <svg width="90" height="90" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.2594 5.29079C23.127 5.15021 22.9644 5.06075 22.7916 5.03339C22.6189 5.00602 22.4434 5.04194 22.2868 5.13673L17.3895 8.10102L12.7944 1.5136C12.7104 1.39315 12.6065 1.29655 12.4899 1.23035C12.3732 1.16414 12.2465 1.12988 12.1183 1.12988C11.9901 1.12988 11.8633 1.16414 11.7467 1.23035C11.6301 1.29655 11.5262 1.39315 11.4422 1.5136L6.84705 8.10097L1.94976 5.13668C1.79316 5.04191 1.61772 5.00601 1.44495 5.03338C1.27219 5.06075 1.10959 5.1502 0.977111 5.29076C0.844628 5.43133 0.74801 5.6169 0.699101 5.82474C0.650191 6.03257 0.651116 6.25363 0.701762 6.46082L4.10253 20.3698C4.15834 20.5981 4.2717 20.7981 4.42587 20.9401C4.58004 21.0822 4.76686 21.1589 4.95877 21.1589H19.2778C19.4697 21.1589 19.6565 21.0822 19.8107 20.9402C19.9648 20.7981 20.0782 20.5982 20.134 20.3699L23.5348 6.46087C23.5854 6.25368 23.5864 6.03261 23.5375 5.82477C23.4886 5.61693 23.3919 5.43135 23.2594 5.29079ZM18.6144 18.9335H5.62205L3.01102 8.25425L6.68126 10.4759C6.85844 10.5831 7.05915 10.6146 7.25222 10.5656C7.44529 10.5165 7.61994 10.3896 7.74906 10.2045L12.1183 3.94095L16.4876 10.2045C16.6167 10.3896 16.7913 10.5165 16.9844 10.5656C17.1775 10.6146 17.3781 10.5831 17.5553 10.4759L21.2256 8.25425L18.6144 18.9335Z" fill="url(#paint0_linear_85_9861)" stroke="black" stroke-width="0.5" />
                            <defs>
                                <linearGradient id="paint0_linear_85_9861" x1="2.14633" y1="-2.95011" x2="24.8344" y2="-1.38245" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#C4C4C4" />
                                    <stop offset="1" stop-color="white" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <p className="relative z-10 font-light flex text-off-white hover:text-off-white transition-all duration-500 leading-dynamic-p text-dynamic-p">
                        Stand out with a digital presence they’ll always remember
                    </p>
                </div>
            </section>
            <div className=" relative z-10 pointer-events-none flex my-28 flex-col items-center gap-0 md:gap-4">
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