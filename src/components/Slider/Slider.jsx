import React from "react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import artists from "../../artists.js";

import "./styles.scss";

const Slider = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

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
                <div>
                  <h1>{artist.name}</h1>
                  <p>{artist.date}</p>
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
