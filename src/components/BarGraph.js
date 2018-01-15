import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './BarGraph.css';

class BarGraph extends Component {
	render() {
		return (
		<section className={'bar-chart-section'}>	
			<div className={'bar-chart'}>
				<AreaChart 
					width={800} 
					height={300} 
					data={this.props.barDataArr}
            		margin={{top: 10, right: 100, left: 50, bottom: 10}}>
       			<XAxis dataKey="name"/>
       			<YAxis/>
       			<CartesianGrid strokeDasharray="3 3"/>
       			<Tooltip />
       			<Area type="monotone" dataKey="Submission" stroke="#8884d8" fill={'#8884d8'} activeDot={{r: 8}}/>
      			</AreaChart>
			</div>
		</section>
		);
	}
}

export default BarGraph;