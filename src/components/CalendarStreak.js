import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tooltip } from 'react-lightweight-tooltip';
import LogHabit from './LogHabit';
import { setGraphInfo } from '../actions'
import moment from 'moment';
import './CalendarStreak.css';

class CalendarStreak extends Component {

	render() {
		const habitSubmitInfo = this.props.streak.map((recording, index) =>
		<Tooltip key={index}
			content={[`${recording.impressions} time(s) on ${recording.submitted}`]}>	
					
					<li key={index} 
					index={index} 
					value={recording.impressions}
					className={`${recording.impressions}` > 0 ? 'green': 'red'}
					{...recording}></li>

		</Tooltip>
			);

		return (
		<section className={'calendar-section'}>
			<header>
				<h3>{this.props.habitName}</h3>
			</header>		
			<div className={'calendar-streak'}>
			<p>Start Date: {this.props.currentHabit.startdate}</p>
			<p>Current Streak: {this.props.currentStreak} Day(s)</p>
				<ul className={'habit-streak-ul'}>{habitSubmitInfo}</ul>
			</div>
			<LogHabit />
		</section>
		);
	}
}

export default CalendarStreak