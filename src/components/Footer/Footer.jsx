import React from "react";

import "./styles.scss";

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
          <i className="fab fa-instagram"></i>
        </a>

        <a
          href="https://www.facebook.com/QFEvora"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <i className="fab fa-facebook-square"></i>
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
              <i className="fas fa-map-marker-alt icon" aria-hidden="true">
                <span>Entrada</span>
              </i>
              <p>Av. da Universidade, 7005-869 Évora</p>
            </a>
          </li>
          <li>
            <a href="tel:+351266098003">
              <i className="fas fa-phone icon" aria-hidden="true">
                <span>Telefone</span>
              </i>
              <p>+ 351 266 09 80 03</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="contactosFooter">
        <h2>Emails</h2>
        <ul>
          <li>
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