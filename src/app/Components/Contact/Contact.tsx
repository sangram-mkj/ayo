"use client"
import React from 'react';
import './Contact.css';
import Image from 'next/image';
import contact_us from '../../../../public/assets/Images/contact_us.png'
import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import phoneIcon from '../../../../public/assets/icons/phone-flip 1.svg'
import mailIcon from '../../../../public/assets/icons/envelope.svg'
import personIcon from '../../../../public/assets/icons/user 1.svg'


function Contact() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className='mainBox'>
      <div className="box">
        <div className="left-box">
          <div className="imgBox">
            <Image src={contact_us} alt='Contact image' className='contact_img' />
          </div>
          <div className="notImage">
            <div className="header">
              <p>Ayopark</p>
            </div>
            <div className="description">
              <p>Have a query? Just fill this form and we will get back to you as soon as possible</p>
            </div>
          </div>
        </div>
        <div className="contacts-right">
          <div className="text">
            <p>Contact Us_______</p>
          </div>
          <div className="get-in-touch">
            <p>Get in Touch</p>
          </div>
          <div className="sub-text">
            <p>24/7 We will answeryour questions and car parking problems</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="formBox">
            <div className="two">
              <div className="inputDiv">
                <Image src={personIcon} alt='call-icon' className="icon" />
                <input type='text' placeholder='First Name' {...register('firstName')} className="formInput" />
              </div>
              <div className="inputDiv">
                <Image src={personIcon} alt='mail-icon' />
                <input type='text' placeholder='Last Name' {...register('lastName')} className="formInput" />
              </div>
            </div>
            <div className="two">
              <div className="inputDiv">
              <Image src={mailIcon} alt='mail-icon' />
                <input type="email" placeholder='Email' {...register('email')} className="formInput" />
              </div>
              <div className="inputDiv">
              <Image src={phoneIcon} alt='mail-icon' />
                <input type="tel" placeholder='Phone' {...register('mobile')} className="formInput" />
              </div>
            </div>

            <div className="queryBox">
              <textarea placeholder='Describe your query here' {...register('query')} className="longText" />
            </div>
            {/* <input type='submit' className='btn' /> */}
            <button type='submit' className='btn'>Send</button>
          </form>
          <h1>FORM</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact