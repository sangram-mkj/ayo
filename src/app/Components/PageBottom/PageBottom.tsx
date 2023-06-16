import React from 'react';
import './pagebottom.css';
import Image from 'next/image';
import envelope from '../../../../public/assets/icons/envelope.svg';
import Button from '@/app/Reusable/Button/Button';

function PageBottom() {
  return (
    <div className='main'>
      <div className="main-container">
        <div className="left">
          <div className="textBox">
            <h2 className="headerText">Ayopark</h2>
            <p className="description">Since our establishment in 2021, Ayopark has been dedicated to supporting landlords in the implementation of efficient parking management solutions, employing an ethical </p>
            <div className="newsletter">
              <Image src={envelope} alt='email icon' className='mail-icon' />
              <input type="email" name="newsletterMail" placeholder='Subscribe to our newsletter' className="newsletterMail" />
              <button className='btn'>SEND</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="rightBox">
            <div className="firstBox">
              <h4 className="links-header">Useful Links</h4>
              <ul className="contents">
                <li className='content-li'><a href="" className='link'>About</a></li>
                <li className='content-li'><a href="" className='link'>About Us</a></li>
                <li className='content-li'><a href="" className='link'>Our Services</a></li>
                <li className='content-li'><a href="" className='link'>Testimonial</a></li>
                <li className='content-li'><a href="" className='link'>Pricing</a></li>
                <li className='content-li'><a href="" className='link'>Contact Us</a></li>
              </ul>
            </div>
            <div className="secondBox">
              <h4 className="links-header">Contact Info</h4>
              <ul className="contents">
                <li className='content-li'><a href="" className='link'>Ayopark address goes here</a></li>
                <li className='content-li'><a href="" className='link'>Tel: 0000111122</a></li>
                <li className='content-li'><a href="" className='link'>Fax: 0000111122</a></li>
                <li className='content-li'><a href="" className='link'>email@mail.com</a></li>
                <li className='content-li-link'>
                  <a href="">i</a>
                  <a href="">c</a>
                  <a href="">o</a>
                  <a href="">n</a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PageBottom