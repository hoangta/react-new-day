import React, { Component } from 'react';
import moment from 'moment'

import './App.css';

import TimeZone, { timeZones } from './TimeZone';

class App extends Component {
  render() {
    const utcNow = moment().utc()
    const utcHours = utcNow.hours() + utcNow.minutes()/60
    const items = timeZones
      .map((zone, index) => {
        let hours = zone.utc + utcHours
        if (hours > 0) {
          hours -= 24
        }

        return { 
          name: zone.name,  
          hours
        }
      })
      .sort((item1, item2) => {
        return item1.hours - item2.hours
      })

    const current = items[0]
    const next = items[items.length - 1]
    
    return (
      <div className="App">
        <TimeZone name={current.name} utc={current.hours} />
        <TimeZone name={next.name} type="next" utc={next.hours} />
      </div>
    );
  }
}

export default App;
