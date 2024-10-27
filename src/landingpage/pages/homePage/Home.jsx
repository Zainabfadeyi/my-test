import React from "react";
import HeroSection from "../../HeroSection";
import Data1 from "./Data1";
import Data4 from "./Data4";
import Data3 from "./Data3";
import Data2 from "./Data2";
import Dashboard from "./Dashboard";


const Home = () => {
  return (
    <div>
      <HeroSection >
        <Data1/>
        <Dashboard/>
        <Data2/>
        <Data3/>
        <Data4/>
        <omeObjFour />
      </HeroSection>
    </div>
  );
};

export default Home;
