import React from "react";
import CartazSection from "../../components/CartazSection/CartazSection";
import "./styles.scss";
import artistsByDay from "../../artistsByDay.json";

const Cartaz = () => {
  return (
    <div className="cartaz">
      {artistsByDay.map((artists, index) => (
        <CartazSection artists={artists} key={index} day={index + 3} />
      ))}
    </div>
  );
};

export default Cartaz;
