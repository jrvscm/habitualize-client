import React, { Component } from 'react';
import { connect } from 'react-redux';
import PieChart from 'react-minimal-pie-chart';
import { setDonutData, SET_DONUT_DATA } from '../actions';
import './DonutChart.css';

class DonutChart extends Component {
	
	componentDidMount() {
			const donutDataArr = [];

			this.props.donutChartData.map((recording, index) =>
				donutDataArr.push({
								value: recording.impressions,
								key: index,
								color: 'slateBlue'//'#'+Math.floor(Math.random()*16777215).toString(16)
							})
			);

			this.props.dispatch(setDonutData(donutDataArr));
	}

	render() {
		return (	
			<div className="donut-chart statistics">
					<span className={'average-submit'}>
						<h3>{this.props.averageSubmit} / Day</h3>
						<PieChart
  							data={this.props.donutDataArr}
							animate={true}
							animationDuration={1000}
							animationEasing= {"ease-in-out"}
							startAngle={180}
							lineWidth={20}
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