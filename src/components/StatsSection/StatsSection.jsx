import React from 'react'
import GridCardDesign from '../GridCardDesign/GridCardDesign'
import LampContainer from '../LampContainer/LampContainer'
import MagneticButton from '../MagneticButton/MagneticButton'


const StatsSection = () => {
    return (
        <section className='relative md:h-[50vh] w-full flex flex-col px-4 my-6'>
            <LampContainer>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center my-8 text-white/60 relative">
                    <MagneticButton bgColor='bg-transparent' textColor='text-white'>
                        <GridCardDesign title="25" description="Success Project" />
                    </MagneticButton>
                    <MagneticButton bgColor='bg-transparent' textColor='text-white'>
                        <GridCardDesign title="3" description="Years Experience" />
                    </MagneticButton>
                    <MagneticButton bgColor='bg-transparent' textColor='text-white'>
                        <GridCardDesign title="1" description="Product Launched" />
                    </MagneticButton>
                    <MagneticButton bgColor='bg-transparent' textColor='text-white'>
                        <GridCardDesign title="3" description="Startup Raised" />
                    </MagneticButton>
                </div>
            </LampContainer>
        </section>
    )
}

export default StatsSection
