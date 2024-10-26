import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../landingpage/Navbar";
import Footer from "../landingpage/pages/Footer/Footer";


const LayoutHome = () => {
  return (
    <div>
      <Navbar/>

      <div style={{display:"flex", flexDirection:"column",
        justifyContent:"center",
        alignItems: "center",
        backgroundColor:"#000319"
      }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutHome;