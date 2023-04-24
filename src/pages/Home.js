import React from 'react';
// core components
import MyNavbar from "components/MyNavbar.js";
import Header from "components/Header.js";
import Footer from "components/Footer.js";
import MaskIntroductionSection from './sections/MaskIntroductionSection';
import VideoSection from './sections/VideoSection';
import HomeMapSection from './sections/HomeMapSection';

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
      <MyNavbar navbarSolidColor="black"/>
      
      <div className="wrapper">
        
        <Header routeImage = {require("assets/img/home-header.png")} title="Gaia Aleph" description = "Reduza as emissões e ganhe créditos de carbono" filterColor="blue"/>
        
        <div className="main">
          <VideoSection backgroundColor="black" urlVideo="https://player.vimeo.com/video/440582383?background=1"/>
          <MaskIntroductionSection/>
          <HomeMapSection/>
        </div>

        <Footer />

      </div>
    </>
  );
}

export default Home;