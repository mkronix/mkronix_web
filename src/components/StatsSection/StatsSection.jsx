import React from 'react'
import GridCardDesign from '../GridCardDesign/GridCardDesign'


const StatsSection = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center my-8 text-white/60 relative">
            <GridCardDesign title="25" description="Success Project" />
            <GridCardDesign title="3" description="Years Experience" />
            <div className='max-md:block text-white hidden absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                <svg width="45" height="40" viewBox="0 0 45 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3636 0L24.0714 10.0865C24.8 14.3902 28.4834 17.7666 33.1783 18.4346L44.1818 20L33.1783 21.5654C28.4834 22.2334 24.8 25.6098 24.0714 29.9135L22.3636 40L20.6558 29.9135C19.9272 25.6098 16.2438 22.2334 11.5489 21.5654L0.54541 20L11.5489 18.4346C16.2438 17.7666 19.9272 14.3902 20.6558 10.0865L22.3636 0Z" fill="currentColor" />
                </svg>
            </div>
            <GridCardDesign title="1" description="Product Launched" />
            <GridCardDesign title="3" description="Startup Raised" />
        </div>
    )
}

export default StatsSection