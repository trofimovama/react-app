import React, { ReactElement } from "react";
import "./General.scss";
import "./Hour.scss";

import {observer} from 'mobx-react';
import {Store} from "../../stores/LocalStore";




export const DaySecondaryCard = observer(():React.ReactElement => {

    const forecastDailyItems = Store.dailyForecast.slice(1).map((f, i:number) => {
        const dayname = new Date(f.dt * 1000).toLocaleDateString("en", {weekday: "long"})
        return (
            <div className="day_secondary_container" key={i}>
                <div className="secondary_title">
                 {dayname}
                </div>
                <div>
                    <img  alt="sun" className="active_hour_img" src={`${Store.UrlIcon}${f.weather[0].icon}${Store.UrlIconSize}`} />
                </div>
                <div className="secondary_hour_degrees">
                    {f.temp.max}°C / {f.temp.min}°C
                </div>
          </div>
        )
    })

    return (
        <div className="secondary_cards_row">
            {forecastDailyItems}
        </div>
    );
  });