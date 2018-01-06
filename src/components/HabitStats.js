import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { setGraphInfo } from '../actions';
import moment from 'moment';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroArea from './HeroArea';
import LogHabit from './LogHabit';
import CalendarStreak from './CalendarStreak';
import BarGraph from './BarGraph';
import DonutChart from './DonutChart';
import BestStreak from './BestStreak';
import PercentSuccess from './PercentSuccess';
import SimpleModal from './Modal';
import { Redirect } from 'react-router-dom';
import Modal, {closeStyle} from 'simple-react-modal';
import { getCurrentHabit } from '../actions'; 
import './HabitStats.css';

class HabitStats extends Component {
	componentDidMount() {
		let streak = this.props.streak;
		let habit = this.props.currentHabit;
		this.props.dispatch(setGraphInfo(habit, streak));
	}

	render() {

		if(this.props.loggedOut) {
			return <Redirect to="/home" />;
		}

		return (
	<Grid fluid>
		<div className={'habit-stats-container'}>
			
			<Row>
				<Col xs={12}>	
					<Navbar />
				</Col>
			</Row>

			<Row>
				<Col xs={12}>
					<HeroArea title={'Habit Stats'}/>
					<LogHabit />
				</Col>
			</Row>

			<Row>
				<Col xs={12}>
					<CalendarStreak 
					habitName={this.props.habitName}
					currentHabit={this.props.currentHabit}
					streak={this.props.streak}
					startdate={this.props.currentHabit.startdate}
					/>
				</Col>
			</Row>
					<section className={'circle-charts'}>
					
						<Row>
							<Col xs>
								<PercentSuccess />
							</Col>

							<Col xs>
								<DonutChart
								averageSubmit={this.props.averageSubmit}
								donutDataArr={this.props.donutDataArr} />
							</Col>

							<Col xs>
								<BestStreak 
								longestStreak={this.props.longestStreak} />
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
					<Footer title={'footer stuff'}/>
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