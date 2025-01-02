import React from 'react'
import statsData from '../../data/statssection'
import GridCardDesign from '../GridCardDesign/GridCardDesign'
import LampContainer from '../LampContainer/LampContainer'
import { NeonGradientCard } from '../NeonCard/NeonCard'
const StatsSection = () => {
    return (
        <section className='relative z-10 h-screen w-full flex flex-col my-6'>
            <LampContainer>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center my-8 text-off-white relative">
                    {statsData.map((stat, index) => (
                        <NeonGradientCard key={index}>
                            <div className=''>
                                <h3 className="text-dynamic-p font-bold text-off-white">{stat.title}+</h3>
                                <p className="md:text-xl">{stat.description}</p>
                            </div>
                        </NeonGradientCard>
                    ))}
                </div>
            </LampContainer>
        </section>
    )
}

export default StatsSection
