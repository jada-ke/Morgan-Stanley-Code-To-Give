import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import React, { useState } from "react";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import { homeObjOne } from "../Components/InfoSection/Data";
import InfoSection2 from "../Components/InfoSection2/index.js";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection2 />
    </>
  );
};

export default Home;
