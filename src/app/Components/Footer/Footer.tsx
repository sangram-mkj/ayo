import React from "react";
// import styles from './footer.module.css';
import './footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <div>
                <p>© {new Date().getFullYear()} Ayopark Enforcement</p>
            </div>
            <div>
                <p>Terms & Conditions</p>
            </div>
        </div>
    )
}

export default Footer;