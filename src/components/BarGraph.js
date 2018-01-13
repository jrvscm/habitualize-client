import React, { Component } from 'react';
import moment from 'moment';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
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
            		margin={{top: 50, right: 125, left: 50, bottom: 50}}>
       			<XAxis dataKey="name"/>
       			<YAxis/>
       			<CartesianGrid strokeDasharray="3 3"/>
       			<Tooltip />
       			<Legend height={5} width={5} wrapperStyle={{ bottom: 40, left: 200, backgroundColor: 'transparent', border: 'none', borderRadius: 3, lineHeight: '10px' }} />
       			<Area type="monotone" dataKey="Submission" stroke="#8884d8" fill={'#8884d8'} activeDot={{r: 8}}/>
      			</AreaChart>
			</div>
		</section>
		);
	}
}

export default BarGraph;