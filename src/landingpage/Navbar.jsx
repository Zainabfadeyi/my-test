import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
             
            Xplora.io
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
           
              
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <div style={{display:"flex"}}>
              <div className="nav-links">About </div>
                <div className="nav-links">Blog</div>
                <div className="nav-links">Support</div>
              </div>
              <div style={{display:"flex"}}>
            
              <li className="nav-btn">
                {button ? (
                  <Link to="/register" className="btn-link">
                    <Button buttonStyle="btn--outline"> Get Started</Button>
                  </Link>
                ) : (
                  <Link to="/register" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      Get Started
                    </Button>
                  </Link>
                )}
              </li>
              </div>
            </ul>
          
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
