import React, { useState, useEffect } from "react";
import axios from "axios";
import './Tampapp.css'
function Tampapp() {
  const [weather, setWeather] = useState(null);
  const [input, setinput] = useState();
  const API_KEY = "02bea7dbe89e9910a08ef9552d0159e3";
  const CITY = "Bengaluru";

  useEffect(() => {
    async function fetchData() {
      {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="main">
      <div>
        <input
          type="input"
          placeholder="search here"
          onChange={event => {
            setinput(event.target.value);
          }}
        />
      </div>
      <div className="App">
        {weather ? (
          <div>
            <h1>Weather in {CITY}</h1>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].main}</p>
            <p>Description: {weather.weather[0].description}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Tampapp;
