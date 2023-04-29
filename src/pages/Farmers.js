import React from 'react';
// core components
import MyNavbar from "components/MyNavbar.js";
import Header from "components/Header.js";
import Footer from "components/Footer.js";

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
      <MyNavbar navbarSolidColor="dark-green"/>
      <div className="wrapper">
        <Header routeImage = {require("assets/img/farmers-header.png")} title="Fazendeiros" description ="Motivação, responsabilidade e paixão " filterColor="dark-orange"/>
        <Footer />
      </div>
    </>
  );
}

export default Farmers;