import React from "react";
import "./General.scss";
import "./Hero.scss";

import {BsArrowUp} from "react-icons/bs";
import {BsArrowDown} from "react-icons/bs";
import {FiWind} from "react-icons/fi";
import {BsUmbrella} from "react-icons/bs";
import {WiSunrise} from "react-icons/wi";
import {WiSunset} from "react-icons/wi";
import sun from "../../assets/sun_2.png"


const Hero = () => {
    return (
      <section className="hero_container">
          <div className="flex_container_top">
                <div className="left_flex_box">
                    <p className="city_title">Minsk, BY</p>
                    <img src={sun} alt="sun" className="weather_pic"/>
                </div>
                <div className="right_flex_box">
                    <div className="main_temp">30°</div>
                    <div className="main_feel">Feels Like <span>35°</span></div>
                    <div className="main_flex_temp">
                        <div className="min_max_temp">
                            <span className="arrow_up"><BsArrowUp /></span>
                            <span>36°</span>
                        </div>
                        <div className="min_max_temp">
                            <span className="arrow_down"><BsArrowDown /></span>
                            <span>34°</span>
                        </div>
                    </div>
                </div>
          </div>
          <div className="divider"></div>
          <div className="flex_container_bottom">
              <div className="bottom_left_box">
                  <div className="info_box">
                    <span className="bottom_info_icon"><FiWind /></span>
                    <div className="bottom_box_info">12 MPH</div> 
                  </div>
                  <div className="info_box">
                    <span className="bottom_info_icon"><BsUmbrella /></span>
                    <div className="bottom_box_info">15%</div> 
                  </div>
              </div>

              <div className="bottom_right_box">
                  <div className="info_box">
                    <span className="bottom_info_icon"><WiSunrise /></span>
                    <div className="bottom_box_info">6:20 AM</div> 
                  </div>
                  <div className="info_box">
                    <span className="bottom_info_icon"><WiSunset /></span>
                    <div className="bottom_box_info">8:00 PM</div> 
                  </div>
              </div>

          </div>

      </section>
    );
  };
  
  export default Hero;