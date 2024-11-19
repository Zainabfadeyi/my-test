import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import { IoLocationOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer-container">
      
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Fingertip</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Resources</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
            
            <div  style={{fontSize:"13px", width:"100%"}}
            >
               <IoLocationOutline />
               7480 Mockingbird Hill undefined 
            </div>
        
        
            <div style={{marginTop:"10px", marginBottom:"15px", fontSize:"14px"}}>
               <IoIosPhonePortrait />
               (239) 555-0108
            </div>
            

            
         
          <div className="social-icons">
         
            <Link
              className="social-icon-link"
              to="https://twitter.com/ZFadeyi"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="https://www.linkedin.com/in/zainab-fadeyi-7443aa248/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
