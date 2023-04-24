import React from 'react';
// core components
import MyNavbar from "components/MyNavbar.js";
import Header from "components/Header.js";
import MaskDescriptionSection from './sections/MaskDescriptionSection';
import ThreeLongImagesSection from './sections/ThreeLongImagesSection';
import VideoModalSection from './sections/VideoModalSection';
import Footer from "components/Footer.js";
import PlatformClientTypesSection from './sections/PlatformClientTypesSection';
import PlatformDescriptionSection from './sections/PlatformDescriptionSection';

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
        <Header routeImage = {require("assets/img/home-header.png")} title="Tecnologia" description ="Inovação, automação e segurança" filterColor="purple"/>
        <MaskDescriptionSection/>
        <ThreeLongImagesSection/>
        <PlatformDescriptionSection/>
        <PlatformClientTypesSection/>
        <VideoModalSection title="Pecuária e Meio Ambiente" miniTitle="Nucleo de Divulgação Científica" videoId="qRSm4nUV34s" videoImage={require("assets/img/portrait-video.png")}/>
        <Footer />
      </div>
    </>
  );
}

export default Farmers;