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
      <section id="home">
        <Hero />
      </section>
      <section id="delivery">
        <Delivery />
      </section>
      <section id="about">
        <Authentic />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="discover">
        <Discover />
      </section>
      <MarqueeText />
      <Footer />
    </div>
  );
};

export default HomePage;
