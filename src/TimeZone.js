import React, { Component } from 'react';
import { Segment, Label } from 'semantic-ui-react'

class TimeZone extends Component {
	constructor(props) {
		super(props);
		const remaining = -(this.props.timezone.hours * 60)
		const minutes = parseInt(remaining, 10)
		const seconds = (remaining - minutes) * 60
		this.state = { minutes, seconds: parseInt(seconds, 10) };
	}

	componentDidMount() {
		if (this.props.type === 'next') {
			this.prepareTimer()
		}
	}

	prepareTimer() {
		let interval = 0
		if (this.state.minutes > 0) {
			interval = this.state.seconds > 0 ? this.state.seconds * 1000 : 60000
			this.setState({ tick: 'm' })
		}
		else if (this.state.seconds > 55) {
			interval = 1000
			this.setState({ tick: 's' })
		}
		else {
			return this.updateTimeZones()
		}
		console.log(22);
		
		this.timerID = setTimeout(
			() => this.tick(),
			interval
		);
	}

	componentWillUnmount() {
		clearTimeout(this.timerID);
	}

	updateTimeZones() {
		this.props.onTimeZoneUpdate()
	}

	tick() {
		if (this.state.tick === 'm') {
			this.setState({
				minutes: this.state.minutes - 1,
				seconds: 0
			});
		} else {
			this.setState({
				seconds: this.state.seconds - 1
			});
		}
		
		this.prepareTimer()
	}

	render() {
		if (this.props.type !== 'next') {
			return (
				<Segment padded='very' style={{ 'fontSize': '2.5em' }}>
					<p>
						Current: <Label color='red' size='massive'>
							{this.props.timezone.name}
						</Label>
					</p>
				</Segment>
			);
		}

		let value;
		let unit;
		if (this.state.tick === 'm') {
			value = this.state.minutes
			unit = 'minutes'
		} else {
			value = this.state.seconds
			unit = 'seconds'
		}

		return (
			<Segment padded='very' style={{ 'fontSize': '2.5em' }}>
				<p>
					Next: <Label color='blue' size='massive'>
						{this.props.timezone.name}
					</Label> in {value} {unit}
				</p>
			</Segment>
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