import React from 'react';
import p1 from '../../assets/img/p3.jpg';
import p2 from '../../assets/img/p4.jpg';
import p3 from '../../assets/img/p5.png';
import arrowUp from '../../assets/icon/arrow-up.svg';
import diamond from '../../assets/icon/diamond.svg';
import IconWithButton from '../IconWithButton/IconWithButton';
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
        <div className="max-md:pb-8 px-4 my-6 text-white">
            <div className="grid grid-cols-">
                <h2 className="text-dynamic-h2 uppercase font-bold">How it works</h2>
            </div>
            <div className="space-y-12 mt-10 md:mt-20 mb-4">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`flex flex-col gap-10 md:flex-row items-center`}
                    >
                        <div className="md:w-2/6 px-4 mt-8 md:mt-0">
                            <h4 className="text-base font-semibold text-white/50 mb-2">
                                {step.step}
                            </h4>
                            <div className='flex items-center gap-4'>
                                <h3 className="text-6xl font-bold mb-4">{step.title}</h3>
                                <img src={arrowUp} className='w-6 h-6' alt="" />
                            </div>
                            <p className="text-white/60">{step.description}</p>
                        </div>
                        <div className="md:w-4/6 overflow-hidden w-full relative rounded-full h-24 md:h-44">
                            <img
                                src={step.image}
                                alt={step.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
