import React from "react";
import "./General.scss";
import "./Hour.scss";

import {HourActiveCard} from './HourActiveCard'
import {HourSecondaryCard} from './HourSecondaryCard'
import {SectionTitle} from './SectionTitle'

import sun_white from "../../assets/sun_white.png"
import sun_cloud from "../../assets/sun_cloud.png"

const Hour = () => {
    return (
      <section>
          <SectionTitle sec_title='Hourly Forecast' />
          <div className="cards_row">
            <HourActiveCard />
            <HourSecondaryCard 
              title='2P'
              degree='32°'
              icon={sun_white}
              description='Sunny' />
            <HourSecondaryCard 
              title='3P'
              degree='33°'
              icon={sun_cloud}
              description='Cloudy' />
            <HourSecondaryCard 
              title='3P'
              degree='33°'
              icon={sun_cloud}
              description='Cloudy' />
            <HourSecondaryCard 
              title='3P'
              degree='33°'
              icon={sun_cloud}
              description='Cloudy' />
          </div>
          <div className="divider"></div>        

      </section>
    );
  };
  
  export default Hour;