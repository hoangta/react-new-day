import React, { Component } from 'react';
import moment from 'moment'
import { Grid, Segment } from 'semantic-ui-react'
import TimeZone, { timeZones } from './TimeZone';

class App extends Component {
  constructor(props) {
    super(props);
    const values = this.getCurrentTimeZones();
    this.state = {current: values.current, next: values.next, };
    this.updateTimeZones = this.updateTimeZones.bind(this);
  }
  
  getCurrentTimeZones() {
    const utcNow = moment().utc();
    const utcHours = utcNow.hours() + utcNow.minutes() / 60
    const items = timeZones
      .map((zone) => {
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
    return { current: items[0], next: items[items.length - 1] }
  }

  updateTimeZones() {
    this.props.updateTimeZones()
  }

  render() {
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
            <Grid.Column style={{ height: '80%', maxWidth: '40%', minWidth: 400 }} stretched>
              <Segment.Group raised>
                <TimeZone timezone={this.state.current} />
                <TimeZone timezone={this.state.next} type="next" onTimeZoneUpdate={this.updateTimeZones} />
              </Segment.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
