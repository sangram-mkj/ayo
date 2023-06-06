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
          <p>RIGHT</p>
        </div>
    </div>
  )
}

export default PageBottom