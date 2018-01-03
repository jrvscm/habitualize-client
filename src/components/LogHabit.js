import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { 
	sameDayLogged
} from '../actions/index';
import './LogHabit.css';

class LogHabit extends Component {

	onClick() {
		const today = moment().format('MM-DD-YYYY');
		let yesterday = moment().add(-1, 'days');
			yesterday = moment(yesterday).format('MM-DD-YYYY');
		let newLog = {submitted: today, impressions: 1};
		this.props.dispatch(sameDayLogged(newLog, this.props.authToken, this.props.currentHabit))
	}

	render() {
		return(
			<div className="log-habit-container" onClick={this.onClick.bind(this)}>
				<button className="log-habit-button" onClick={this.props.callback}>Log++</button>
			</div>
		);
	}
}

const mapPropsToState = (state) => ({
	currentHabit: state.HabitStatsReducer.currentHabit,
	streak: state.HabitStatsReducer.currentHabit.streak,
	currentUser: state.auth.currentUser,
	authToken: state.auth.authToken
})

export default connect(mapPropsToState)(LogHabit);