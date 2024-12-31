import React from 'react';
import arrowUp from '../../assets/icon/arrow-up.svg';
import howItWorksData from '../../data/howitwork';
import CommonHeaderText from '../CommonHeaderText/CommonHeaderText';
import ScrollRevealText from '../ScrollRevealText/ScrollRevealText';
const HowItWorks = () => {

    return (
        <section className='relative'>
            <CommonHeaderText text='How It Works' />
            <div className="max-md:pb-8 px-4 my-6 text-off-white">
                <div className="flex flex-col gap-20 md:mt-20 mb-4">
                    {howItWorksData.map((step, index) => (
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
                                <h3 className="text-base font-semibold text-off-white mb-2">
                                    {step.step}
                                </h3>
                                <div className='flex items-center gap-4'>
                                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4">{step.title}</h1>
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
