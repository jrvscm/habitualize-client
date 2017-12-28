import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PieChart }from 'react-easy-chart';
import { setDonutData, SET_DONUT_DATA } from '../actions';
import './DonutChart.css';

class DonutChart extends Component {
	
	componentDidMount() {
			const donutDataArr = [];

			this.props.donutChartData.map((recording, index) => {
				if(recording.impressions > 0) {

					donutDataArr.push({
								value: recording.impressions,
								key: recording.impressions,
						})
					}
				}
				
			);

			this.props.dispatch(setDonutData(donutDataArr));
	}

	render() {
		return (	
			<div className="donut-chart statistics">
					<span className={'average-submit'}>
						<h3>{this.props.averageSubmit} / Day</h3>
						<PieChart
							labels
  							data={this.props.donutDataArr}
							size={150}
							innerHoleSize={100}
						/>
					</span>
			</div>
		);
	}
}

const mapPropsToState = (state) => ({
	donutChartData: state.HabitStatsReducer.currentHabit.streak,
	donutDataArr: state.HabitStatsReducer.donutDataArr,
	averageSubmit: state.HabitStatsReducer.averageSubmit
})

export default connect(mapPropsToState) (DonutChart);