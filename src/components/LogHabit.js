import React, { Component } from 'react';
import { 
	logSubmission,
	setModalShow
} from '../actions/index';
import { connect } from 'react-redux';
import './LogHabit.css';

class LogHabit extends Component {
	onClick() {
		const currentHabit = this.props.currentHabit;
		const authToken = this.props.authToken;
		this.props.dispatch(logSubmission(currentHabit, authToken));

		if(this.props.setNewRecord === true) {
			this.props.dispatch(setModalShow());
		}
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
	authToken: state.auth.authToken,
	setNewRecord: state.HabitStatsReducer.setNewRecord
})

export default connect(mapStateToProps)(LogHabit);