import React, { Component } from 'react';
import moment from 'moment'
import { Grid, Segment } from 'semantic-ui-react'
import TimeZone, { timeZones } from './TimeZone';

class App extends Component {
  render() {
    const utcNow = moment().utc()
    const utcHours = utcNow.hours() + utcNow.minutes() / 60
    const items = timeZones
      .map((zone, index) => {
        let hours = zone.utc + utcHours
        if (hours > 0) {
          hours = hours % 24 - 24
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
      <div>
        <style>{`
          body > div,
          body > div > div {
            height: 100%;
          }
        `}</style>

        <Grid textAlign='center' style={{ height: '100%' }}>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column style={{ height: '80%', maxWidth: '40%', minWidth: 400 }} stretched='true'>
              <Segment.Group raised>
                <TimeZone name={current.name} utc={current.hours} />
                <TimeZone name={next.name} type="next" utc={next.hours} />
              </Segment.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
