import React from 'react';
// core components
import MyNavbar from "components/MyNavbar.js";
import Header from "components/Header.js";
import MaskSection from './sections/TheBeginningSection';
import VideoModalSection from './sections/VideoModalSection';
import Footer from "components/Footer.js";
import AboutStaffSection from './sections/AboutStaffSection';
import AboutBettingSection from './sections/AboutBettingSection';
import MoSection from './sections/FgvSection';

function Farmers () {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  
  return (
    <>
      <MyNavbar navbarSolidColor="black"/>
      <div className="wrapper">
        <Header routeImage = {require("assets/img/farmers-header.png")} title="Fazendeiros" description ="Motivação, responsabilidade e paixão " filterColor="dark-orange"/>
        <Footer />
      </div>
    </>
  );
}

export default Farmers;