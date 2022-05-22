import React from "react";
import "./General.scss";
import "./Hour.scss";

export const HourSecondaryCard = (props) => {
    return (
          <div className="hour_container_secondary">
                <div className="secondary_title">{props.title}</div>
                <div className="secondary_hour_degrees">{props.degree}</div>
                <div className="bottom_flex_items">
                    <div className="icon_container">
                        <img src={props.icon} alt="sun" className="flex_img"/>  
                    </div>            
                    <div className="secondary_title bottom_descr">{props.description}</div>
                </div>
          </div>
    );
  };