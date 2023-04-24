import React from 'react';
// core components
import MyNavbar from "components/MyNavbar.js";
import Header from "components/Header.js";
import TheBeginningSection from './sections/TheBeginningSection';
import Footer from "components/Footer.js";
import AboutStaffSection from './sections/AboutStaffSection';
import AboutBettingSection from './sections/AboutBettingSection';
import FgvSection from './sections/FgvSection';

function About () {
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
        <Header routeImage = {require("assets/img/about-header.jpg")} title="Nossa equipe" description ="Compromisso, proximidade e dedicação" filterColor="blue"/>
        <TheBeginningSection/>
        <FgvSection/>
        <AboutStaffSection/>
        <AboutBettingSection/>
        <Footer />
      </div>
    </>
  );
}

export default About;