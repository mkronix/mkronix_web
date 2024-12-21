import React from 'react';
import arrowUp from '../../assets/icon/arrow-up.svg';
import p1 from '../../assets/img/p3.jpg';
import p2 from '../../assets/img/p4.jpg';
import p3 from '../../assets/img/p5.png';
import { RetroGrid } from '../RetroGrid/RetroGrid';
import ScrollRevealText from '../ScrollRevealText/ScrollRevealText';
const HowItWorks = () => {
    const steps = [
        {
            title: 'Create',
            description:
                'Welcome Studio gives you all the tools you need to create and host virtual experiences that look and feel premium.',
            image: p3,
            step: 'Step 1',
        },
        {
            title: 'Engage',
            description:
                'Cut through the noise, grab your audience’s attention, and host passive attendees into active participants.',
            image: p1,
            step: 'Step 2',
        },
        {
            title: 'Analyze',
            description:
                'Track the success of your events with deep insights and see where attendees spent their time.',
            image: p2,
            step: 'Step 3',
        },
    ];

    return (
        <section className='relative'>
            <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
                <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#bdbdbd] via-[#ffffff] to-[#5e5e5e] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                    <p>How It Works?</p>
                </span>
                <RetroGrid />
            </div>
            <div className="max-md:pb-8 px-4 my-6 text-white">
                <div className="space-y-12 md:mt-20 mb-4">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`flex gap-10 flex-col-reverse md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
                        >
                            <div className="md:w-4/6 overflow-hidden w-full relative rounded-full h-24 md:h-44">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-2/6 px-4 mt-8 md:mt-0">
                                <h4 className="text-base font-semibold text-white/50 mb-2">
                                    {step.step}
                                </h4>
                                <div className='flex items-center gap-4'>
                                    <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4">{step.title}</h3>
                                    <img src={arrowUp} className='w-6 h-6' alt="" />
                                </div>
                                <ScrollRevealText>
                                    {step.description}
                                </ScrollRevealText>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
