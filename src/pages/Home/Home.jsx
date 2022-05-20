import React from "react";
import Hero from "../../components/Hero/Hero";
import Slider from "../../components/Slider/Slider";
import Sponsors from "../../components/Sponsors/Sponsors";

const Home = () => {
  return (
    <div>
      <Hero />
      <Sponsors />
      <Slider />
    </div>
  );
};

export default Home;
