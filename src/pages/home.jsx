import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AboutUs from '../components/AboutUs/AboutUs'
import Cursor from '../components/Cursor/Cursor'
import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSection/HeroSection'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Missions from '../components/Mission/Mission'
import SEO from '../components/SEO/SEO'
import Services from '../components/ServiceSection/ServiceSection'
import StatsSection from '../components/StatsSection/StatsSection'
import Testimonals from '../components/Testimonals/Testimonals'
import FloatingTestimonals from '../components/FloatingTestimonals/FloatingTestimonals'

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
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