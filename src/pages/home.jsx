import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import Cursor from '../components/Cursor/Cursor'
import FloatingTestimonals from '../components/FloatingTestimonals/FloatingTestimonals'
import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSection/HeroSection'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Missions from '../components/Mission/Mission'
import SEO from '../components/SEO/SEO'
import Services from '../components/ServiceSection/ServiceSection'
import StatsSection from '../components/StatsSection/StatsSection'
import Testimonals from '../components/Testimonals/Testimonals'

const Home = () => {

    return (
        <>
            <SEO
                title="MkRonix | Futuristic Digital Solutions - Home"
            />
            <HeroSection />
            <FloatingTestimonals />
            <StatsSection />
            <Testimonals />
            <AboutUs />
            <Services />
            <HowItWorks />
            <Missions />
            <Footer />
            <Cursor />
        </>
    )
}

export default Home