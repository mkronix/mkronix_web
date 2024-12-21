import React from 'react';
import ServiceReveal from '../ServiceReveal/ServiceReveal';

const Services = () => {
    return (
        <section className='relative max-md:pb-8 px-4 my-6'>
            <div className='flex justify-between md:items-center max-md:flex-col'>
                <div className='flex flex-col justify-center md:w-2/3'>
                    <h2 className='font-bold font-antic text-dynamic-h2 text-white/80'>OUR SERVICES</h2>
                </div>
            </div>
            <ServiceReveal />
        </section>
    );
};

export default Services;
