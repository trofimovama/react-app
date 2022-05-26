import React from "react";
import "./General.scss";
import "./Day.scss";

import {SectionTitle} from './SectionTitle'
import {DayActiveCard} from './DayActiveCard'
import {DaySecondaryCard} from './DaySecondaryCard'

import sun_cloud from "../../assets/sun_cloud.png"
import sun_2 from "../../assets/sun_2.png"

const Day = () => {
    return (
      <section>
          <SectionTitle sec_title='7 Day Forecast' />
          <div className="cards_row">
            <DayActiveCard />
            <DaySecondaryCard 
            day = 'Tuesday'
            icon = {sun_cloud}
            temp = '34°/35°'
            />
            <DaySecondaryCard 
            day = 'Wednesday'
            icon = {sun_2}
            temp = '35°/36°'
            />
          </div>
          
          
      </section>
    );
  };
  
  export default Day;