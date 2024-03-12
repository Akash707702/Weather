import React, { useState } from "react";
import "./Tampapp.css";
const Wthr = () => {
  let api = {
    key: "02bea7dbe89e9910a08ef9552d0159e3",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };

  let [search, setsearch] = useState();
  let [weather, setweather] = useState();
  function locsearch() {
    fetch(`${api.base}?q=${search}&appid=${api.key}&units=metric`)
      .then(res => res.json())
      .then(data => {
        setweather(data);
      });
  }
  return (
    <>
      <div className="main">
        <h1>Weather By Akash</h1>
        <div className="main-input">
          <input
            type="text"
            onChange={e => setsearch(e.target.value)}
            placeholder="search location"
          />

          <button onClick={locsearch}>search</button>
        </div>
        <div className="App">
          {weather ? (
            <div className="des">
              <h2>
                Weather in <span>{search}</span>
              </h2>
              <p>
                Temperature: <span className="temp">{weather.main.temp}</span>°C
              </p>
              <p>Weather: {weather.weather[0].main}</p>
              <p>Description: {weather.weather[0].description}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Wthr;
