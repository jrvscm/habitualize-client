import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroArea from './HeroArea';
import CalendarStreak from './CalendarStreak';
import BarGraph from './BarGraph';
import DonutChart from './DonutChart';
import BestStreak from './BestStreak';
import PercentSuccess from './PercentSuccess';
import { Redirect } from 'react-router-dom';
import './HabitStats.css';

class HabitStats extends Component {
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
				</Col>
			</Row>

			<Row>
				<Col xs={12}>
					<CalendarStreak 
					habitName={this.props.habitName}
					streak={this.props.streak}
					startDate={this.props.startDate}
					/>
				</Col>
			</Row>
					<section className={'circle-charts'}>
					
						<Row>
							<Col xs>
								<PercentSuccess />
							</Col>

							<Col xs>
								<DonutChart />
							</Col>

							<Col xs>
								<BestStreak />
							</Col>
						</Row>

					</section>
			<Row>
				<Col xs={12}>
					<BarGraph />
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
	startDate: state.HabitStatsReducer.currentHabit.date,
	loggedOut: state.auth.currentUser == null
})

export default connect(mapStateToProps)(HabitStats);