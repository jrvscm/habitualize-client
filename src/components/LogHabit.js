import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { sameDayLogged } from '../actions/index';
import './LogHabit.css';

class LogHabit extends Component {

	onClick() {
		const newStreak = [];
		const streak = this.props.currentHabit.streak;
		const today = moment().format('MM-DD-YYYY');
		let yesterday = moment().add(-1, 'days');
			yesterday = moment(yesterday).format('MM-DD-YYYY');
		let newLog = {submitted: today, impressions: 1};
		let logOfSameDay;
		for(let i=0; i<streak.length; i++) {
			if(streak[i].submitted === newLog.submitted) {
				logOfSameDay = {submitted: newLog.submitted, impressions: streak[i].impressions + 1}
				newStreak.push(logOfSameDay);
			}
		} 
	this.props.dispatch(sameDayLogged(newStreak, this.props.authToken, this.props.currentHabit))
	}

	render() {
		return(
			<div className="log-habit-container">
				<button className="log-habit-button" onClick={this.onClick.bind(this)}>Log++</button>
			</div>
		);
	}
}

const mapPropsToState = (state) => ({
	currentHabit: state.HabitStatsReducer.currentHabit,
	currentUser: state.auth.currentUser,
	authToken: state.auth.authToken,
})

export default connect(mapPropsToState)(LogHabit);