import React from "react";

import "./styles.scss";

import Ipdj from "../../assets/ipdj.png";
import Cme from "../../assets/cme.png";
import Liveact from "../../assets/liveact.png";
import Superbock from "../../assets/superbock.png";
import Mbway from "../../assets/mbway.png";
import Moche from "../../assets/moche.png";
import Ue from "../../assets/ue.png";
import Cidadefm from "../../assets/cidadefm.png";
import Aaue from "../../assets/aaue_branco.png";

const Sponsors = () => {
  return (
    <div className="sponsors">
      <div className="container">
        <p className="type">Organização</p>
        <img className="aaue" src={Aaue} alt="" />
      </div>
      <div>
        <p className="type">Produtor</p>
        <img src={Liveact} alt="" />
      </div>
      <div className="container">
        <p className="type">Parceiros Institucionais</p>
        <div className="images">
          <img className="smallImg" src={Ue} alt="" />
          <img className="smallImg" src={Cme} alt="" />
        </div>
      </div>
      <div className="container">
        <p className="type">Parceiros</p>
        <div className="images">
          <img src={Ipdj} alt="" />
          <img className="bigImg" src={Superbock} alt="" />
          <img className="bigImg" src={Moche} alt="" />
          <img className="bigImg" src={Mbway} alt="" />
        </div>
      </div>
      <div className="container">
        <p className="type">Parceiros Media</p>
        <img className="smallImg" src={Cidadefm} alt="" />
      </div>
    </div>
  );
};

export default Sponsors;
