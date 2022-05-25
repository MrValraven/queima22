import React from "react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import artists from "../../artists.js";

import "./styles.scss";
import Countdown from "../Countdown/Countdown.jsx";

const Slider = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();
  const eventDateInMS = new Date(2022, 5, 3, 22, 0, 0).getTime();
  const [windowDimensions, setWindowDimensions] = useState("");

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <div>
      <motion.div className="carousel" ref={carouselRef}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {artists.map((artist, index) => {
            return (
              <motion.div className="item" key={index}>
                <div className="artistText">
                  <div className="artistInfo">
                    <h1>{artist.name}</h1>
                    <p>{artist.date}</p>
                  </div>
                  <Countdown targetDate={eventDateInMS} />
                </div>
                <img src={artist.img} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
