import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import HeroSection from '../components/HeroSection/HeroSection'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import SEO from '../components/SEO/SEO'
import Services from '../components/ServiceSection/ServiceSection'
import StatsSection from '../components/StatsSection/StatsSection'
import Testimonals from '../components/Testimonals/Testimonals'

const Home = () => {
    return (
        <>
            <SEO
                title="MkRonix | Futuristic Digital Solutions - Home"
                description="Explore MkRonix's homepage, featuring cutting-edge web design, animations, and seamless user experiences."
                keywords="home, MkRonix, web design, UI/UX, animations"
            />
            <HeroSection />
            <StatsSection />
            <Testimonals />
            <AboutUs />
            <Services />
            <HowItWorks />
            <ProjectsSection />
        </>
    )
}

export default Home