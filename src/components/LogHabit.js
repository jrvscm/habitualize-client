import React, { Component } from 'react';
import moment from 'moment';
import { setCurrentHabitArray, sendCurrentHabit } from '../actions';
import { connect } from 'react-redux';
import './LogHabit.css';

class LogHabit extends Component {

	onClick() {
		const today = moment().format('MM-DD-YYYY');
		const yesterday = moment().add(-1, 'days');
		const newLog = {submitted: today, impressions: 1};

		let newArray = this.props.streak.slice();
    	newArray.splice(-1, 0, newLog);
		

		let newCurrentHabit = {
			name: this.props.currentHabit.name,
			date: this.props.currentHabit.date,
			streak: newArray,
			goal: this.props.currentHabit.goal,
			goodorbad: this.props.currentHabit.goodorbad,
			id: this.props.currentHabit.id,
			userref: this.props.currentHabit.userref
		}

		this.props.dispatch(sendCurrentHabit(newCurrentHabit));
	}

	render() {
		return(
			<div className="log-habit-container">
				<button className="log-habit-button" onClick={this.onClick.bind(this)}>Log++</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	streak: state.HabitStatsReducer.currentHabitArray,
	currentHabit: state.HabitStatsReducer.currentHabit
})

export default connect(mapStateToProps)(LogHabit);