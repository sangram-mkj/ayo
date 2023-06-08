import React from 'react';
import './Contact.css';
import Image from 'next/image';
import contact_us from '../../../../public/assets/Images/contact_us.png'

function Contact() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
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
              <form action="">

              </form>
              <h1>FORM</h1>
            </div>
        </div>
    </div>
  )
}

export default Contact