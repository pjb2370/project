import React, { useState } from "react";
import axios from "axios";
import "../ParkCompornents/style.css";
import styled from "styled-components";

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
    <AppWrap>
      <div className="appContentWrap">
        <input
          placeholder="도시를 입력하세요"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          onKeyDown={searchWeather}
        />
        {Object.keys(result).length !== 0 && (
          <ResultWrap>
            <div className="city">{result.data.name}</div>
            <div className="temperature">
              {Math.round((result.data.main.temp - 273.15) * 10) / 10}°C
            </div>
            <div className="sky">{result.data.weather[0].main}</div>
          </ResultWrap>
        )}
      </div>
    </AppWrap>
  );
}

export default Weather;

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;

  .appContentWrap {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    padding: 20px;
  }
  input {
    padding: 16px;
    border: 2px black solid;
    border-radius: 16px;
  }
`;

const ResultWrap = styled.div`
  margin-top: 60px;
  border: 1px black solid;
  padding: 10px;
  border-radius: 8px;

  .city {
    font-size: 24px;
    color: blue;
  }
  .temperature {
    font-size: 60px;
    margin-top: 8px;
    text-shadow: 1px 0 rgb(230, 14, 14), 0 1px rgb(230, 14, 14),
      1px 0 rgb(230, 14, 14), 0 -1px rgb(230, 14, 14);
  }
  .sky {
    font-size: 20px;
    text-align: right;
    margin-top: 8px;
    color: gray;
  }
`;
