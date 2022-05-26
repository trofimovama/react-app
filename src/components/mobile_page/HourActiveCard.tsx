import React from "react";
import "./General.scss";
import "./Hour.scss";
import sun from "../../assets/sun_2.png"

export const HourActiveCard = () => {
    return (
          <div className="hour_container">
                <div className="active_title">
                    Now
                </div>
                <div>
                    <img src={sun} alt="sun" className="active_hour_img"/>
                </div>
                <div className="active_hour_degrees">
                    34°
                </div>
          </div>
    );
  };
  
