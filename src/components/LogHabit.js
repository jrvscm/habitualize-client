import React, { Component } from 'react';
import moment from 'moment';
import { 
	setCurrentHabitArray,
	sendCurrentHabit, 
	setBarChartData,
	setDonutData,
	setLongestStreak,
	setPercentSuccess,
	setAverageSubmit 
	} from '../actions';
import { connect } from 'react-redux';
import './LogHabit.css';

class LogHabit extends Component {

	onClick() {
		/* updating the current streak and current habit to include the new streak*/
		
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

		/* setting new barchart data */
		const newBarDataArray = [];
			newArray.map((streakIteration, index) =>
				newBarDataArray.push({name: streakIteration.submitted, Submission: streakIteration.impressions})
			);

		this.props.dispatch(setBarChartData(newBarDataArray))

		///////////////////////////////////////////////////////////////////////////////////////////////////////

		/*setting new donutChartData*/
		const newDonutDataArr = [];

		this.props.streak.map((recording, index) => {
			if(recording.impressions > 0) {
				newDonutDataArr.push({
							value: recording.impressions,
							key: recording.impressions,
					})
				}
			}				
		);
		this.props.dispatch(setDonutData(newDonutDataArr));

		////////////////////////////////////////////////////////////////////////////////////////////////////////

		/*setting the best streak */
		const streakCheckArr = [];
		this.props.streak.map((streakIteration, index) =>
			streakCheckArr.push(streakIteration.impressions)
		);

		let streaks = streakCheckArr.reduce((res, n) => 
  		(n ? res[res.length-1]++ : res.push(0), res)
		, [0]);

		const longestStreak = Math.max(...streaks);

		this.props.dispatch(setLongestStreak(longestStreak));
		/////////////////////////////////////////////////////////////////////////////////////////////////////////

		/*setting percent success */
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

		///////////////////////////////////////////////////////////////////////////////////////////////////////////

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