import React from "react";
import "./General.scss";
import "./Hour.scss";

import {observer} from 'mobx-react';
import {Store} from "../../stores/LocalStore";

export const HourSecondaryCard = observer(():React.ReactElement => {

    const forecastHourlyItems = Store.hourlyForecast.slice(1).map((f, i:number) => {
        return (
            <div className="hour_container_secondary" key={i}>
                <div className="secondary_title">{(new Date(f.dt * 1000)).toLocaleTimeString('en-US', {hour: '2-digit'})}</div>
                <div className="secondary_hour_degrees">{Math.round(parseInt(f.temp))}°C</div>
                <div className="bottom_flex_items">
                    <div className="icon_container">
                        <img alt={f.weather[0].description} className="flex_img" src={`${Store.UrlIcon}${f.weather[0].icon}${Store.UrlIconSize}`}/>  
                    </div>            
                    <div className="secondary_title bottom_descr">{f.weather[0].main}</div>
                </div>
            </div>
        )
    })

      return (
          <div className="secondary_cards_row">
                {forecastHourlyItems}
          </div>
    );
  });