import React from 'react';
import ServiceReveal from '../ServiceReveal/ServiceReveal';
import CommonHeaderText from '../CommonHeaderText/CommonHeaderText';

const Services = () => {
    return (
        <section className='relative max-md:pb-8 px-4 my-6'>
            <CommonHeaderText text='Our Services' />
            <ServiceReveal />
        </section>
    );
};

export default Services;
