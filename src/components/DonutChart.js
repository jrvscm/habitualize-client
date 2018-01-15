import React, { Component } from 'react';
import { PieChart }from 'react-easy-chart';
import './DonutChart.css';

class DonutChart extends Component {

	render() {
		return (	
			<div className="donut-chart statistics">
				<span className={'average-submit'}>
					<h3>{this.props.averageSubmit} / Day</h3>
					<PieChart
						labels
  						data={this.props.donutDataArr}
						size={200}
						innerHoleSize={140}
					/>
				</span>
			</div>
		);
	}
}

export default DonutChart;