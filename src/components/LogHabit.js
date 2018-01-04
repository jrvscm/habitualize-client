import React, { Component } from 'react';
import moment from 'moment';
import { 
	logSubmission 
	} from '../actions/index';
import { connect } from 'react-redux';
import './LogHabit.css';

class LogHabit extends Component {

	onClick() {
		/*updating the current streak and current habit to include the new streak*/
		const currentHabit = this.props.currentHabit;
		const streak = this.props.streak;
		this.props.dispatch(logSubmission(currentHabit, streak));
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