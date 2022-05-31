import React from "react";

import "./styles.scss";

import IconeFacebook from "../../assets/icone_face.png";
import IconeInstagram from "../../assets/icone_insta.png";
import IconeLinkedin from "../../assets/icone_linkedin.png";
import IconeTwitter from "../../assets/icone_twitter.png";
import IconeMapa from "../../assets/icone_mapa.png";
import IconeMail from "../../assets/icone_mail.png";

const Footer = () => {
  return (
    <footer>
      <div className="socials">
        <h2>Redes sociais</h2>
        <a
          href="https://www.instagram.com/qfevora/"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <img src={IconeInstagram} alt="" />
          <p>QFEVORA</p>
        </a>
        <a
          href="https://twitter.com/aauevora"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <img src={IconeTwitter} alt="" />
          <p>@AAUEVORA</p>
        </a>
        <a
          href="https://www.linkedin.com/company/aauevora/mycompany/"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <img src={IconeLinkedin} alt="" />
          <p>@AAUEVORA</p>
        </a>

        <a
          href="https://www.facebook.com/QFEvora"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <img src={IconeFacebook} alt="" />
          <p> QFEVORA</p>
        </a>
      </div>
      <div className="localizacao">
        <h2>Localização</h2>
        <ul>
          <li>
            <a
              href="https://www.google.pt/maps/dir//38.5742527,-7.9043074/@38.5742657,-7.9044713,139m/data=!3m1!1e3"
              target="_blank"
              rel="noreferrer"
            >
              <img src={IconeMapa} alt="" />
              <span>Entrada</span>
              <p>Av. da Universidade, 7005-869 Évora</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="contactosFooter">
        <h2>Emails</h2>
        <ul>
          <li>
            <img src={IconeMail} alt="" />
            <a href="mailto:queima@aaue.pt">
              <p>queima@aaue.pt</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
