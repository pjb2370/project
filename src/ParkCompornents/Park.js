import "../ParkCompornents/style.css";
import React, { useState, useEffect } from "react";
import moment from "moment";
import Weather from "./Weather.js";

function Park() {
  let timer: any = null;
  const [time, setTime] = useState(moment());
  useEffect(() => {
    timer = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="blue" style={{ fontFamily: "alarm_clock" }}>
        {time.format("YYYY-MM-DD")}
      </div>
      <div className="neon green"> {time.format("HH-mm-ss")}</div>
      <div className="Weather">
        <Weather />
      </div>
    </div>
  );
}

export default Park;
