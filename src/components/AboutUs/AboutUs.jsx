import React from 'react'
import WorkFlowCard from '../WorkFlowCard/WorkFlowCard'
import CommonHeaderText from '../CommonHeaderText/CommonHeaderText'
import aboutusData from '../../data/aboutusdata'

const AboutUs = () => {
    return (
        <section className='relative z-10 pointer-events-none'>
            <CommonHeaderText text='Our Strategy' />
            <div className='relative md:h-[400px] w-full place-items-center grid md:grid-cols-3 grid-cols-1 gap-4 md:p-10 p-4'>
                {aboutusData.map((card, index) => (
                    <WorkFlowCard
                        key={index}
                        number={card.number}
                        title={card.title}
                        description={card.description}
                        onClick={() => { }}
                        animationSpeed={3}
                    />
                ))}
            </div>
        </section>
    )
}

export default AboutUs