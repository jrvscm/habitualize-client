import React, { Component } from 'react';
import './CalendarStreak.css';

class CalendarStreak extends Component {
	render() {

		const habitStreak = this.props.streak.map((day, index) => 
			<li key={index} 
			index={index} 
			className={`${day}` > 0 ? 'green': 'red'}
			{...day}>{day}</li>
		);

		return (
		<section className={'calendar-section'}>
			<header>
				<h3>{this.props.habitName}</h3>
			</header>		
			<div className={'calendar-streak'}>
			<div>Start Date:{this.props.startDate}</div>
				<ul className={'habit-streak-ul'}>{habitStreak}</ul>
			</div>
		</section>
		);
	}
}

export default CalendarStreak;