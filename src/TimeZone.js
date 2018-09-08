import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'

class TimeZone extends Component {
  constructor(props) {
    super(props);
  }

  render() {
		if (this.props.type !== 'next') {
			return (
				<Segment textAlign='center'>Current: {this.props.name}</Segment>
			);
		}

		const remaining = -(this.props.utc * 60)
		const minutes = parseInt(remaining)
		const seconds = (remaining - minutes) 
    return (
			<Segment textAlign='center'>Next: {this.props.name} in {minutes} minutes</Segment>
    );
  }
}

export default TimeZone;
export const timeZones = [{
	name: 'Alofi',
	utc: -11
}, {
	name: 'Honolulu',
	utc: -10
}, {
	name: 'Taiohae',
	utc: -9.5 
}, {
	name: 'Rikitea',
	utc: -9
}, {
	name: 'Anchorage',
	utc: -8
}, {
	name: 'San diego',
	utc: -7
}, {
	name: 'Chihuahua',
	utc: -6
}, {
	name: 'Memphis',
	utc: -5
}, {
	name: 'Philadelphia',
	utc: -4
}, {
	name: 'Santiago',
	utc: -3
}, {
	name: 'St. John’s',
	utc: -2.5
}, {
	name: 'Nuuk',
	utc: -2
}, {
	name: 'Praia',
	utc: -1
}, {
	name: 'Dakar',
	utc: 0
}, {
	name: 'Rabat',
	utc: 1
}, {
	name: 'Vienna',
	utc: 2
}, {
	name: 'Minsk',
	utc: 3
}, {
	name: 'Dubai',
	utc: 4
}, {
	name: 'Kabul',
	utc: 4.5
}, {
	name: 'Karachi',
	utc: 5
}, {
	name: 'Colombo',
	utc: 5.5
}, {
	name: 'Kathmandu',
	utc: 5.75
}, {
	name: 'Omsk',
	utc: 6
}, {
	name: 'Yangon',
	utc: 6.5
}, {
	name: 'Hanoi',
	utc: 7
}, {
	name: 'Taipei',
	utc: 8
}, {
	name: 'Eucla',
	utc: 8.75
}, {
	name: 'Seoul',
	utc: 9
}, {
	name: 'Darwin',
	utc: 9.5
}, {
	name: 'Sydney',
	utc: 10
}, {
	name: 'Lord howe island',
	utc: 10.5
}, {
	name: 'Noumea',
	utc: 11
}, {
	name: 'Tarawa',
	utc: 12
}, {
	name: 'Chatham Islands',
	utc: 12.75
}];