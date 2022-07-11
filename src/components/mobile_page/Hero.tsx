import React from "react";

import "./General.scss";
import "./Hero.scss";

import {BsArrowUp} from "react-icons/bs";
import {BsArrowDown} from "react-icons/bs";
import {FiWind} from "react-icons/fi";
import {BsUmbrella} from "react-icons/bs";
import {FiSunrise} from "react-icons/fi";
import {FiSunset} from "react-icons/fi";

import {observer} from 'mobx-react';
import {Store} from "../../stores/LocalStore";

const Hero:React.FC = observer (() => {
 
    return (
      <section className="hero_container">
          <div className="flex_container_top">
              <div className="left_flex_box">
                  <p className="city_title">{Store.location}</p>
                  <img className="weather_pic" src={Store.iconUrl}/>
              </div>
              <div className="right_flex_box">
                  <div className="main_temp">{Store.temp}°C</div>
                  <div className="main_feel">Feels Like <span>{Store.feels_like}°C</span></div>
                  <div className="main_flex_temp">
                      <div className="min_max_temp">
                          <span className="arrow_up"><BsArrowUp /></span>
                          <span>{Store.temp_max}°C</span>
                      </div>
                      <div className="min_max_temp">
                          <span className="arrow_down"><BsArrowDown /></span>
                          <span>{Store.temp_min}°C</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className="divider"></div>
          <div className="flex_container_bottom">
              <div className="bottom_left_box">
                  <div className="info_box">
                    <span className="bottom_info_icon"><FiWind /></span>
                    <div className="bottom_box_info">{Store.wind_speed} MPH</div> 
                  </div>
                  <div className="info_box">
                    <span className="bottom_info_icon"><BsUmbrella /></span>
                    <div className="bottom_box_info">{Store.humidity}%</div>
                  </div>
              </div>
              <div className="bottom_right_box">
                  <div className="info_box">
                    <span className="bottom_info_icon"><FiSunrise /></span>
                    <div className="bottom_box_info">{Store.sunrise}</div> 
                  </div>
                  <div className="info_box">
                    <span className="bottom_info_icon"><FiSunset /></span>
                    <div className="bottom_box_info">{Store.sunset}</div> 
                  </div>
              </div>
          </div>
      </section>
    );
  });
  
  export default Hero;