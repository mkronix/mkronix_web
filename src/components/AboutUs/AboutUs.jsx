import React from 'react'
import WorkFlowCard from '../WorkFlowCard/WorkFlowCard'

const AboutUs = () => {
    return (
        <section className='relative md:h-[400px] w-full place-items-center grid md:grid-cols-3 grid-cols-1 gap-4 md:p-10 p-4'>
            <WorkFlowCard
                number={'01'}
                title={'Research & Strategy'}
                description={'We explore your brand’s values and market position, blending creativity and strategy to establish a cohesive, impactful presence across all touchpoints.'}
                onClick={() => { }}
                animationSpeed={3}
            />

            <WorkFlowCard
                number={'02'}
                title={'Design Process'}
                description={'Transforming strategy into creative designs, we craft visually appealing elements reflecting your brand’s identity while ensuring functionality and alignment with business goals.'}
                onClick={() => { }}
                animationSpeed={3}
            />

            <WorkFlowCard
                number={'03'}
                title={'Deliver & Payment'}
                description={'Approved designs are delivered with assets, ensuring smooth implementation and a seamless transition, guaranteeing satisfaction with the final product upon payment.'}
                onClick={() => { }}
                animationSpeed={3}
            />
        </section>
    )
}

export default AboutUs