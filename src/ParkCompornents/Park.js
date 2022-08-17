import style from "../ParkCompornents/style.module.css";
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
      <div className={style.blue} style={{ fontFamily: "alarm_clock" }}>
        {time.format("YYYY-MM-DD")}
      </div>
      <div className={style.green}> {time.format("HH:mm:ss")}</div>
      <div>
        <Weather />
      </div>
      <section className={style.SNS}>
        <div className={style.imaA}>
          <a href="https://www.instagram.com/jjjb_1996/">
            <img
              src={require("./img/instagram.png")}
              width="30"
              height="30"
              alt="kakaotalk"
            />
          </a>
        </div>
        <div className={style.imaB}>
          <a href="https://open.kakao.com/o/sth18ewe">
            <img
              src={require("./img/kakaotalk.png")}
              width="30"
              height="30"
              alt="kakaotalk"
            />
          </a>
        </div>
        <div className={style.imaC}>
          <a href="https://www.facebook.com/profile.php?id=100003462018405">
            <img
              src={require("./img/facebook.png")}
              width="30"
              height="30"
              alt="facebook"
            />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Park;
