import React, { Component } from 'react';
import { Tooltip } from 'react-lightweight-tooltip';
import { connect } from 'react-redux';
import LogHabit from './LogHabit';
import './CalendarStreak.css';

class CalendarStreak extends Component {

	render() {
		let habitSubmitInfo;

		if(this.props.streak === undefined) {
			let currentHabit;
			let retrieveHabit;
			retrieveHabit = localStorage.getItem('currentHabit', currentHabit);
			currentHabit = JSON.parse(retrieveHabit);
			let newArray = currentHabit.streak;

	habitSubmitInfo = ( newArray.map((recording, index) =>
		<Tooltip key={index}
			content={[`${recording.impressions} time(s) on ${recording.submitted}`]}>	
					
					<li key={index} 
					index={index} 
					value={recording.impressions}
					className={`${recording.impressions}` > 0 ? 'green': 'red'}
					{...recording}></li>

		</Tooltip>
	)
);

		return (
		<section className={'calendar-section'}>
			<header>
				<h3>{this.props.habitName}</h3>
			</header>		
			<div className={'calendar-streak'}>
			<p>Goal: {this.props.currentHabit.goal}</p>
			<p>Current Streak: {this.props.currentStreak} Day(s)</p>
				<ul className={'habit-streak-ul'}>{habitSubmitInfo}</ul>
			</div>
			<LogHabit />
		</section>
		);
	} else {
		habitSubmitInfo = ( this.props.streak.map((recording, index) =>
		<Tooltip key={index}
			content={[`${recording.impressions} time(s) on ${recording.submitted}`]}>	
					
					<li key={index} 
					index={index} 
					value={recording.impressions}
					className={`${recording.impressions}` > 0 ? 'green': 'red'}
					{...recording}></li>

		</Tooltip>
	)
);

		return (
		<section className={'calendar-section'}>
			<header>
				<h3>{this.props.habitName}</h3>
			</header>		
			<div className={'calendar-streak'}>
			<p>Started on {this.props.currentHabit.startdate}</p>
			<p>Goal: {this.props.currentHabit.goal} times {this.props.currentHabit.loginterval}</p>
			<p>Current Streak: {this.props.currentStreak} Day(s)</p>
			<hr/>
				<ul className={'habit-streak-ul'}>{habitSubmitInfo}</ul>
			</div>
			<LogHabit />
		</section>
		);
		}
	}
}

const mapStateToProps = (state) =>({
streak: state.HabitStatsReducer.currentHabit.streak
})

export default connect(mapStateToProps) (CalendarStreak)