import React, { Component } from 'react';
import { connect } from 'react-redux';
import PieChart from 'react-minimal-pie-chart';
import moment from 'moment';
import './PercentSuccess.css';

class PercentSuccess extends Component {
	render() {
		return (	
			<div className={'percent-success statistics'}>
			<span className={'percentageDisplay'} >
				<h3>{this.props.percentSuccess} %</h3>
				<PieChart
  					data={[
    					{ 
    						value: 100, 
    						key: 1, 
    						color: 'green', 
    					}
						]}
					reveal= {this.props.percentSuccess}
					animate={true}
					animationDuration={1000}
					startAngle={180}
					totalValue={100}
					lineWidth={20}
				/>
			</span>
			</div>
		);
	}
}

const mapPropsToState = (state) => ({
	percentSuccess: state.HabitStatsReducer.percentSuccess
})

export default connect(mapPropsToState) (PercentSuccess);