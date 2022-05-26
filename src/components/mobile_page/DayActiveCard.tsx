import React from "react";
import "./General.scss";
import "./Hour.scss";
import cloud_rain from "../../assets/cloud_rain.png"

export const DayActiveCard = () => {
    return (
          <div className="day_container">
                <div className="active_title">
                    Tomorrow
                </div>
                <div>
                    <img src={cloud_rain} alt="sun" className="active_hour_img"/>
                </div>
                <div className="active_hour_degrees">
                    34°
                </div>
          </div>
    );
  };