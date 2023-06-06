import React from 'react';
import './pagebottom.css';
import Image from 'next/image';
import envelope from '../../../../public/assets/icons/envelope.svg';
import Button from '@/app/Reusable/Button/Button';

function PageBottom() {
  return (
    <div className='main'>
        <div className="left">
          <div className="textBox">
            <div className="headerText">
              <p>Ayopark</p>
            </div>
            <br />
            <div className="description">
              <p>Since our establishment in 2021, Ayopark has been dedicated to supporting landlords in the implementation of efficient parking management solutions, employing an ethical </p>
            </div>   
            <br />
            <div className="newsletter">
              <Image  src={envelope} alt='email icon' className='mail-icon' />
              <input type="email" name="newsletterMail" placeholder='Subscribe to our newsletter' className="newsletterMail" />
              <button className='btn'>SEND</button>
            </div>        
          </div>          
        </div>
        <div className="right">
          <div className="rightBox">
            <div className="firstBox">
              <div className="header">
                Useful Links
              </div>
              <br />
              <br />
              <div className="contents">
                <ul>
                  <li>About</li>
                  <li>About Us</li>
                  <li>Our Services</li>
                  <li>Testimonial</li>
                  <li>Pricing</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="secondBox">
              <div className="header">
                Contact Info
              </div>
              <div className="contents">
                <ul>
                  <li>Ayopark address goes here</li>
                  <li>Tel: 0000111122</li>
                  <li>Fax: 0000111122</li>
                  <li>email@mail.com </li>
                  <li>I C O N</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PageBottom