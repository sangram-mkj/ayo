import React from 'react';
import Image from 'next/image';
import Navbar from './Components/Navbar';
import PageBottom from './Components/PageBottom/PageBottom';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Marquee from './Components/Marquee/MarqueeSection';

export default function Home() {
  return (
    <div className="mainDiv">
      <Navbar />
      <Marquee />
      <Contact />
      <PageBottom />
      <Footer />
    </div>
  )
}
