import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stat from '../components/Stat'
import WhyChooseUs from '../components/WhyChooseUs'
import JoinUs from '../components/JoinUs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center">
      <div className="w-[95%] z-10 bg-white rounded-[60px] px-4 py-2 m-4 mt-4">
        <Navbar />
        <Hero />
      </div>

      <Stat />
      <WhyChooseUs />

      <JoinUs />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
