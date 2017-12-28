import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BarChart } from 'react-easy-chart';
import { setBarChartData, SET_BAR_CHART_DATA} from '../actions';
import './BarGraph.css';

class BarGraph extends Component {

	componentDidMount() {
		const barDataArr = [];
		this.props.streak.map((streakIteration, index) =>
			barDataArr.push({x: streakIteration.submitted, y: streakIteration.impressions})
		);
		
		this.props.dispatch(setBarChartData(barDataArr))
	}

	render() {
		return (
		<section className={'bar-chart-section'}>		
			<div className={'bar-chart'}>
				<BarChart
					colorBars
					axes
					axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
					margin={{top: 0, right:0, bottom:30, left:100}}
					data={this.props.barDataArr}
					height={150}
					width={800}
				/>
			</div>
		</section>
		);
	}
}

const mapStateToProps = (state) => ({
	streak: state.HabitStatsReducer.currentHabit.streak,
	barDataArr: state.HabitStatsReducer.barDataArr
})

export default connect(mapStateToProps) (BarGraph);