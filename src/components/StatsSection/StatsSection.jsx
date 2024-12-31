import React from 'react'
import GridCardDesign from '../GridCardDesign/GridCardDesign'
import LampContainer from '../LampContainer/LampContainer'
import MagneticButton from '../MagneticButton/MagneticButton'
import statsData from '../../data/statssection'
const StatsSection = () => {
    return (
        <section className='relative z-10 md:h-[50vh] w-full flex flex-col my-6'>
            <LampContainer>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center my-8 text-off-white relative">
                    {statsData.map((stat, index) => (
                        <MagneticButton bgColor='bg-transparent' textColor='text-off-white'>
                            <GridCardDesign title={stat.title} description={stat.description} />
                        </MagneticButton>
                    ))}
                </div>
            </LampContainer>
        </section>
    )
}

export default StatsSection
