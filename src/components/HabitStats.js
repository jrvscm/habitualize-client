import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { setGraphInfo } from '../actions';
import moment from 'moment';
import Navbar from './Navbar';
import Footer from './Footer';
import CalendarStreak from './CalendarStreak';
import BarGraph from './BarGraph';
import DonutChart from './DonutChart';
import BestStreak from './BestStreak';
import PercentSuccess from './PercentSuccess';
import NewBestStreakModal from './NewBestStreakModal';
import '../reset.css';
import '../App.css';
import './HabitStats.css';

class HabitStats extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		let streak = this.props.streak;
		let habit = this.props.currentHabit;
		this.props.dispatch(setGraphInfo(habit, streak));
	}

	render() {
		return (
	<Grid fluid>
		<div className={'habit-stats-container'}>
			
			<Navbar />

			<Row>	
				<NewBestStreakModal />
			</Row>


			<Row className={'streak-row'}>
				<Col xs={12}>
					<CalendarStreak 
					logInterval={this.props.currentStreak.loginterval}
					currentStreak={this.props.currentStreak}
					habitName={this.props.habitName}
					currentHabit={this.props.currentHabit}
					streak={this.props.streak}
					startdate={moment(this.props.currentHabit.startdate, 'MM-DD-YYYY')}
					/>
				</Col>
			</Row>

			<section className={'circle-charts'}>
					
				<Row>
					<Col xs>
						<BestStreak 
						longestStreak={this.props.longestStreak} />
					</Col>

					<Col xs>
						<DonutChart
						averageSubmit={this.props.averageSubmit}
						donutDataArr={this.props.donutDataArr} />
					</Col>

					<Col xs>
						<PercentSuccess />
					</Col>
				</Row>

			</section>

			<Row>
				<Col xs={12}>
					<BarGraph 
					barDataArr={this.props.barDataArr}/>
				</Col>
			</Row>

			<Row>
				<Col xs={12}>
					<div>
						<Footer title={'Built by JrvscM'} />
					</div>
				</Col>
			</Row>

		</div>
	</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	currentHabit: state.HabitStatsReducer.currentHabit,
	habitName: state.HabitStatsReducer.currentHabit.name,
	streak: state.HabitStatsReducer.currentHabit.streak,
	currentStreak: state.HabitStatsReducer.currentStreak,
	longestStreak: state.HabitStatsReducer.longestStreak,
	barDataArr: state.HabitStatsReducer.barDataArr,
	currentUser: state.auth.currentUser,
	authToken: state.auth.authToken,
	loggedEntry: state.HabitStatsReducer.loggedEntry,
	donutChartData: state.HabitStatsReducer.currentHabitArray,
	donutDataArr: state.HabitStatsReducer.donutDataArr,
	averageSubmit: state.HabitStatsReducer.averageSubmit,
	loggedOut: state.auth.currentUser == null
})

export default connect(mapStateToProps)(HabitStats);