import "./General.scss";
import "./Day.scss";

import {SectionTitle} from './SectionTitle'
import {DaySecondaryCard} from './DaySecondaryCard'

const Day = () => {
    return (
      <section>
          <SectionTitle sec_title='7 Day Forecast' />
          <div className="cards_row">
            <DaySecondaryCard />          
          </div>
      </section>
    );
  };
  
  export default Day;