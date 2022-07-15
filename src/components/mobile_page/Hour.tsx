import React from "react";
import "./General.scss";
import "./Hour.scss";

import {HourSecondaryCard} from './HourSecondaryCard'
import {SectionTitle} from './SectionTitle'

import {observer} from 'mobx-react';

const Hour = observer(() => {
    return (
      <section>
          <SectionTitle sec_title='Hourly Forecast' />
            <div className="cards_row">
              <HourSecondaryCard />
            </div>
          <div className="divider"></div>        
      </section>
    );
  });
  
  export default Hour;