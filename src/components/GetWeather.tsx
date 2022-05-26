import React, { useState } from "react";
import "./GetWeather.scss";
import { WeatherFunction } from "./WeatherFunction";

const GetWeather = () => {
  const [data, setData]: any[] = useState([]);
  const [location, setLocation] = useState("");

  const searchLocation = async (event: any) => {
    if (event.key === "Enter") {
      const weatherData = await WeatherFunction(location);
      setData(weatherData);
      setLocation("");
      console.log(weatherData);
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
            <p>{data[0]}</p>
          </div>
          <div className="temp">
            <h1>{data[1]}</h1>
          </div>
          <div className="description">
            <p>{data[2]}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="max-temp">
            <p>{data[3]}</p>
          </div>
          <div className="min-temp">
            <p>{data[4]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetWeather;
