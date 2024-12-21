import React from 'react'
import GridCardDesign from '../GridCardDesign/GridCardDesign'


const StatsSection = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center my-8 text-white/60 relative">
            <GridCardDesign title="25" description="Success Project" />
            <GridCardDesign title="3" description="Years Experience" />
            <GridCardDesign title="1" description="Product Launched" />
            <GridCardDesign title="3" description="Startup Raised" />
        </div>
    )
}

export default StatsSection