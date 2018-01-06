import React, { Component } from 'react';
import { connect } from 'react-redux';
import PieChart from 'react-minimal-pie-chart';
import { setLongestStreak, SET_LONGEST_STREAK } from '../actions';
import './BestStreak.css';

class BestStreak extends Component {
	render() {
		let streakColor;
		
		if(this.props.longestStreak >= 1) {
			streakColor = 'green';
		} else {
			streakColor = 'red';
		}

		return (	
			<div className={'best-streak statistics'}>
				<span className={'best-streak'} >
					<h3>Best Streak:<br/>{this.props.longestStreak} Day(s)</h3>
						<PieChart
  							data={[
    							{ 
    								value: 100, 
    								key: 1, 
    								color: `${streakColor}`, 
    							}
								]}
							reveal= {100}
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

const mapStateToProps = (state) => ({
	streak: state.HabitStatsReducer.currentHabitArray,
	longestStreak: state.HabitStatsReducer.longestStreak
})

export default connect(mapStateToProps) (BestStreak);