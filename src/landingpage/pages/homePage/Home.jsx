import React from "react";
import HeroSection from "../../HeroSection";
import Data1 from "./Data1";
import Data4 from "./Data4";
import Data3 from "./Data3";
import Data2 from "./Data2";
import Dashboard from "./Dashboard";
import '../../../layout/layout.css'
import HomeObjFour from "./Data";


const Home = () => {
  return (
    <div className="home">
      <HeroSection >
        <Data1/>
        <Dashboard/>
        <Data2/>
        <Data3/>
        <Data4/>
        <HomeObjFour />
      </HeroSection>
    </div>
  );
};

export default Home;
