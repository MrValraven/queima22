import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./styles.scss";

const ComoChegar = () => {
  const { width: windowWidth } = useWindowDimensions();
  return (
    <div className="comoChegar">
      <h1>
        Como chegar ao <a>recinto</a>
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.903871826609!2d-7.905554884383069!3d38.5738964735522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19e4c29eb74e3d%3A0xa8d641276173d0d6!2zTjE4LCDDiXZvcmE!5e1!3m2!1spt-PT!2spt!4v1654021062756!5m2!1spt-PT!2spt"
        width={windowWidth * 0.8}
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ComoChegar;
