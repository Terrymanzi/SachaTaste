import React from "react";
import Hero from "../components/Hero/Hero";
import Delivery from "../components/Delivery/Delivery";
import Authentic from "../components/Authentic/Authentic";
import Menu from "../components/Menu/Menu";
import Team from "../components/Team/Team";
import Discover from "../components/Discover/Discover";
import MarqueeText from "../components/MarqueeText/MarqueeText";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Delivery />
      <Authentic />
      <Menu />
      <Team />
      <Discover />
      <MarqueeText />
      <Footer />
    </div>
  );
};

export default HomePage;
