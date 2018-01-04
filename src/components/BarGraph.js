import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { BarChart } from 'react-easy-chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { setBarChartData, SET_BAR_CHART_DATA} from '../actions';
import './BarGraph.css';

class BarGraph extends Component {
	render() {
		return (
		<section className={'bar-chart-section'}>	
			<div className={'bar-chart'}>
				<LineChart 
					width={800} 
					height={300} 
					data={this.props.barDataArr}
            		margin={{top: 50, right: 125, left: 50, bottom: 50}}>
       			<XAxis dataKey="name"/>
       			<YAxis/>
       			<CartesianGrid strokeDasharray="3 3"/>
       			<Tooltip />
       			<Legend height={5} width={5} wrapperStyle={{ bottom: 40, left: 200, backgroundColor: 'transparent', border: 'none', borderRadius: 3, lineHeight: '10px' }} />
       			<Line type="monotone" dataKey="Submission" stroke="#8884d8" activeDot={{r: 8}}/>
      			</LineChart>
			</div>
		</section>
		);
	}
}

const mapStateToProps = (state) => ({
	barDataArr: state.HabitStatsReducer.barDataArr,
	streak: state.HabitStatsReducer.currentHabitArray
})

export default connect(mapStateToProps) (BarGraph)