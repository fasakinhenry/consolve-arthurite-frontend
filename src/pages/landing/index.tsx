import React from 'react'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sponsors from './components/Sponsors'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import InteractiveMapMockup from './components/InteractiveMapMockup'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export const Landing: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Top Banner and Announcement Strips */}
      <Banner />

      {/* Main Navigation Header */}
      <Navbar />

      {/* Hero Header with real-time transit simulation */}
      <Hero />

      {/* Sponsors list */}
      <Sponsors />

      {/* Critical metrics grid */}
      <Stats />

      {/* Platform value pillars */}
      <HowItWorks />

      {/* Interactive dashboard visualizer */}
      <InteractiveMapMockup />

      {/* Clickable Accordion FAQ */}
      <FAQ />

      {/* Email newsletter waitlist */}
      <CTA />

      {/* Solid black base footer */}
      <Footer />
    </div>
  )
}
export default Landing
