import React from "react";
import './footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <p className="footer-para">© {new Date().getFullYear()} Ayopark Enforcement</p>
                <p className="footer-para">Terms & Conditions</p>
            </div>
        </div>
    )
}

export default Footer;