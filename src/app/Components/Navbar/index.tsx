import React from 'react';
import styles from './navbar.module.css'

function Navbar() {
  return (
    <div className={styles.mainNav}>
      <div className={styles.navBox}>
        <div className={styles.logo}>
          <h3>Ayopark</h3>
        </div>        
        <div className={styles.navbarMid}>
          <h3>Home</h3>
          <h3>About Us</h3>
          <h3>Our Services</h3>
          <h3>Testimonial</h3>
          <h3>Pricing</h3>
          <h3>Contact Us</h3>
        </div>
        <div className={styles.navbarRight}>
          <button className={styles.btn}>Pay For Parking</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar