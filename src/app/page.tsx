import React from 'react';
import Image from 'next/image';
import Navbar from './Components/Navbar';
import PageBottom from './Components/PageBottom/PageBottom';
import Footer from './Components/Footer/Footer';

export default function Home() {
  return (
    <div className="mainDiv">
      <Navbar />
      <PageBottom />
      <Footer />
    </div>
  )
}
