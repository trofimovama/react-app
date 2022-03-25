import React, { useState } from "react";
import "./GetWeather.css";
import axios from "axios";

const GetWeather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=31437cba04d38b2ed41b44a1882df5f7&lang=ru`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="weather-page">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter the location..."
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp} ℃</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="max-temp">
            {data.main ? (
              <p>Максимальная температура сегодня: {data.main.temp_max} ℃</p>
            ) : null}
          </div>
          <div className="min-temp">
            {data.main ? (
              <p>Минимальная температура сегодня: {data.main.temp_min} ℃</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetWeather;
