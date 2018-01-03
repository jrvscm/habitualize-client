import React, { Component } from 'react';
import moment from 'moment';
import './LogHabit.css';

class LogHabit extends Component {
	render() {
		return(
			<div className="log-habit-container">
				<button className="log-habit-button" onClick={this.props.callback}>Log++</button>
			</div>
		);
	}
}

export default LogHabit;