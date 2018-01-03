import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPercentSuccess, SET_PERCENT_SUCCESS, setAverageSubmit, SET_AVERAGE_SUBMIT } from '../actions';
import { Tooltip } from 'react-lightweight-tooltip';
import './CalendarStreak.css';

class CalendarStreak extends Component {
	
	componentDidMount() {
		const impressionsArrTotal=[];
		const posDigitsArr=[];

		this.props.streak.map((recording, index) =>
			impressionsArrTotal.push(recording.impressions)
			);

		for(let i=0; i<impressionsArrTotal.length; i++) {
			if(impressionsArrTotal[i] > 0) {
				posDigitsArr.push(impressionsArrTotal[i])
			}
		}

		let percentSuccess =   posDigitsArr.length / impressionsArrTotal.length;
			percentSuccess = (percentSuccess * 100).toFixed(2);
			percentSuccess = Number(percentSuccess);
				this.props.dispatch(setPercentSuccess(percentSuccess));

		const sumTotalImpressionsArr = impressionsArrTotal.reduce(function(a , b) {
			return a + b;
		}, 0);

		let averageSubmit = sumTotalImpressionsArr / impressionsArrTotal.length;
			  averageSubmit = Number(averageSubmit);
				this.props.dispatch(setAverageSubmit(averageSubmit.toFixed(2)))
}
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
			<p>Start Date:{this.props.startDate}</p>
				<ul className={'habit-streak-ul'}>{habitSubmitInfo}</ul>
			</div>
		</section>
		);
	}
}

const mapPropsToState = (state) => ({
	streak: state.HabitStatsReducer.currentHabitArray
})

export default connect(mapPropsToState) (CalendarStreak);