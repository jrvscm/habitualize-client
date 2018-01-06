import React, { Component } from 'react';
import moment from 'moment';
import { 
	logSubmission
	} from '../actions/index';
import { connect } from 'react-redux';
import './LogHabit.css';

class LogHabit extends Component {
	onClick() {
		const currentHabit = this.props.currentHabit;
		const authToken = this.props.authToken;
		/*updating the current streak and current habit to include the new streak*/
		this.props.dispatch(logSubmission(currentHabit, currentHabit.streak, authToken));
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
	streak: state.HabitStatsReducer.currentHabit.Streak,
	currentHabit: state.HabitStatsReducer.currentHabit,
	authToken: state.auth.authToken
})

export default connect(mapStateToProps)(LogHabit);