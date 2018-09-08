import React, { Component } from 'react';
import moment from 'moment'
import { Grid } from 'semantic-ui-react'
import TimeZone, { timeZones } from './TimeZone';

class App extends Component {
  render() {
    const utcNow = moment().utc()
    const utcHours = utcNow.hours() + utcNow.minutes() / 60
    const items = timeZones
      .map((zone, index) => {
        let hours = zone.utc + utcHours
        hours = hours % 24 - 24

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
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: '50%', minWidth: 450 }}>
          <TimeZone name={current.name} utc={current.hours} />
          <TimeZone name={next.name} type="next" utc={next.hours} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
