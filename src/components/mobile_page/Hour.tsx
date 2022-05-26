import React from "react";
import "./General.scss";
import "./Hour.scss";

import {HourActiveCard} from './HourActiveCard'
import {HourSecondaryCard} from './HourSecondaryCard'
import {SectionTitle} from './SectionTitle'

import sun_white from "../../assets/sun_white.png"
import sun_cloud from "../../assets/sun_cloud.png"

const Hour = () => {

  const HourData: any[] = [
    {
      id: 0,
      title: '2P',
      degree: '32°',
      icon: sun_white,
      description: 'Sunny'
    },
    {
      id: 1,
      title: '3P',
      degree: '33°',
      icon: sun_cloud,
      description: 'Cloudy'
    },
    {
      id: 2,
      title: '4P',
      degree: '32°',
      icon: sun_white,
      description: 'Sunny'
    },
    {
      id: 3,
      title: '5P',
      degree: '31°',
      icon: sun_cloud,
      description: 'Cloudy'
    }
  ]

    return (
      <section>
          <SectionTitle sec_title='Hourly Forecast' />
            <div className="cards_row">
              <HourActiveCard />

              {HourData.map((item: any) => {
                return (
                  <HourSecondaryCard 
                    title = {item.title}
                    degree = {item.degree}
                    icon = {item.icon}
                    description = {item.description}
                    key = {item.id}
                    />               
                )
              })}
            </div>
          <div className="divider"></div>        

      </section>
    );
  };
  
  export default Hour;