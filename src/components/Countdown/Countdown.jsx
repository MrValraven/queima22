import React from "react";
import DateTimeDisplay from "../DateTimeDisplay/DateTimeDisplay";
import { useCountdown } from "../../hooks/useCountdown";

import "./styles.scss";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="countdown">
      <DateTimeDisplay value={days} type={"Dias"} />
      <DateTimeDisplay value={hours} type={"Horas"} />
      <DateTimeDisplay value={minutes} type={"Minutos"} />
      <DateTimeDisplay value={seconds} type={"Segundos"} />
    </div>
  );
};

const Countdown = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
};

export default Countdown;
