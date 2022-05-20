import React from "react";

import "./styles.scss";
import Image from "../../assets/artista.png";
import Countdown from "../Countdown/Countdown";

const Hero = () => {
  return (
    <div className="hero">
      <main>
        <div className="heroText">
          <h2>--- 3 a 12 de Junho ---</h2>
          <h1>Queima das Fitas'22</h1>
          <p>
            As melhores noites de Évora estão de volta e com ela chegam os
            momentos mais.
            <br />
            Save the date, a tua queima está quase a chegar!
          </p>
          <a
            href="https://e.3cket.com/queimadasfitasevora"
            target="_blank"
            rel="noopenner noreferrer"
          >
            Arranja já os teus bilhetes &#62;
          </a>
        </div>
        <div className="heroImage">
          <img src={Image} alt="" />
        </div>
      </main>
      <Countdown />
    </div>
  );
};

export default Hero;
