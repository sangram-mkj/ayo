import React from 'react';
import Image from 'next/image';
import Navbar from './Components/Navbar';
import PageBottom from './Components/PageBottom/PageBottom';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Marquee from './Components/Marquee/MarqueeSection';
import About from './Components/About/About';
import AyoPay from './Components/AyoPay/AyoPay';
import Reviews from './Components/Reviews/Reviews';
export default function Home() {
  return (
    <div className="mainDiv">
      <Navbar />
      <Marquee />
      <About />
      <AyoPay />
      <Reviews />
      <Contact />
      <PageBottom />
      <Footer />
    </div>
  )
}
