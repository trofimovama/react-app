import React from "react";
import "./General.scss";
import "./Hour.scss";

interface DaySecondaryCardProps {
    day: string;
    icon: any;
    temp: string;
}

export const DaySecondaryCard = (props: DaySecondaryCardProps) => {
    return (
          <div className="day_secondary_container">
                <div className="secondary_title">
                    {props.day}
                </div>
                <div>
                    <img src={props.icon} alt="sun" className="active_hour_img"/>
                </div>
                <div className="secondary_hour_degrees">
                    {props.temp}
                </div>
          </div>
    );
  };