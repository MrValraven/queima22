import React from "react";

import "./styles.scss";

const CartazSection = ({ artists, day }) => {
  const days = {
    3: "SEX >> 03",
    4: "SÁB >> 04",
    5: "DOM >> 05",
    6: "SEG >> 06",
    7: "TER >> 07",
    8: "QUA >> 08",
    9: "QUI >> 09",
    10: "SEX >> 10",
    11: "SÁB >> 11",
    12: "DOM >> 12",
  };
  return (
    <div className="cartazSection">
      <h2>{days[day]}</h2>
      {artists.map((artist) => (
        <h1>{artist}</h1>
      ))}
    </div>
  );
};

export default CartazSection;
