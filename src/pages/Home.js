import React from 'react';
// core components
import MyNavbar from "components/MyNavbar.js";
import Header from "components/Header.js";
import Footer from "components/Footer.js";
import HomeLandingSection from './sections/HomeLandingSection';
import MaskIntroductionSection from './sections/HomeMaskIntroductionSection';
import HomeMapSection from './sections/HomeMapSection';
import VideoModalSection from './sections/VideoModalSection';
import PlatformClientTypesSection from './sections/PlatformClientTypesSection';
import ActionFormSection from './sections/ActionFormSection';
import FixedActionButton from 'components/FixedActionButton';

function Home () {
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
        
        <Header routeImage = {require("assets/img/home-header.png")} title="Gaia Aleph" description = "Venha conhecer o dinheiro dos créditos de carbono" filterColor="blue"/>
        
        <div className="main">
          <HomeLandingSection/>
          <VideoModalSection title="Entendendo o Problema" miniTitle="Observatório do Clima" videoId="VNsja2bEEAA" videoImage={require("assets/img/portrait-video-home.png")}/>
          <MaskIntroductionSection/>
          <PlatformClientTypesSection/>
          <ActionFormSection/>
          <HomeMapSection/>
          <FixedActionButton/>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;