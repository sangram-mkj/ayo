import React from 'react';
import Image from 'next/image';
import Navbar from './Components/Navbar';
import PageBottom from './Components/PageBottom/PageBottom';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

export default function Home() {
  return (
    <div className="mainDiv">
      <Navbar />
      <Contact />
      <PageBottom />
      <Footer />
    </div>
  )
}
