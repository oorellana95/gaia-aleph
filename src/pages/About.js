import React from 'react';
// core components
import MyNavbar from "components/MyNavbar.js";
import Header from "components/Header.js";
import TheBeginningSection from './sections/AboutTheBeginningSection';
import Footer from "components/Footer.js";
import AboutStaffSection from './sections/AboutStaffSection';
import AboutBettingSection from './sections/AboutBettingSection';
import AboutFgvSection from './sections/AboutFgvSection';
import ActionFormSection from './sections/ActionFormSection';
import FixedActionButton from 'components/FixedActionButton';

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
      <MyNavbar navbarSolidColor="dark-green"/>
      <div className="wrapper">
        <Header routeImage = {require("assets/img/about-header.jpg")} title="Nossa equipe" description ="Compromisso, proximidade e dedicação" filterColor="blue"/>
        <TheBeginningSection/>
        <AboutFgvSection/>
        <AboutStaffSection/>
        <AboutBettingSection/>
        <ActionFormSection/>
        <FixedActionButton/>
        <Footer />
      </div>
    </>
  );
}

export default About;