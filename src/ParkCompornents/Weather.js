import React, { useState } from "react";
import axios from "axios";
import style from "../ParkCompornents/style.module.css";

function Weather() {
  const [location, setLocation] = useState("");
  const [result, setResult] = useState({});
  const API_KEY = "a4f40ac57831f1083ae5fcd0e88e4d29";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await axios({
          method: "get",
          url: url,
        });
        setResult(data);
        console.log(data);
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <section className={style.AppWrap}>
      <div className={style.appContentWrap}>
        <input
          className={style.input}
          placeholder="도시를 입력하세요"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          onKeyDown={searchWeather}
        />
        {Object.keys(result).length !== 0 && (
          <section className={style.ResultWrap}>
            <div className={style.city}>{result.data.name}</div>
            <div className={style.temperature}>
              {Math.round((result.data.main.temp - 273.15) * 10) / 10}°C
            </div>
            <div className={style.sky}>{result.data.weather[0].main}</div>
          </section>
        )}
      </div>
    </section>
  );
}

export default Weather;
