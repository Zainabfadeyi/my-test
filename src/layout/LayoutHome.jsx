import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../landingpage/Navbar";
import Footer from "../landingpage/pages/Footer/Footer";
import './layout.css'


const LayoutHome = () => {
  return (
    <div>
      <Navbar/>

      <div  className="layout">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutHome;