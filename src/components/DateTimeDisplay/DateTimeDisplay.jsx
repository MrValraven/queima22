import React from "react";

import "./styles.scss";

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className="datetimedisplay">
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
