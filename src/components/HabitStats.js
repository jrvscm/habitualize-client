import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { setCurrentHabit } from '../actions';
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
import './HabitStats.css';

class HabitStats extends Component {

	handler() {
		this.props.dispatch(setCurrentHabit(this.props.currentHabit))
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
					<LogHabit callback={this.handler.bind(this)}/>
				</Col>
			</Row>

			<Row>
				<Col xs={12}>
					<CalendarStreak 
					habitName={this.props.habitName}
					streak={this.props.streak}
					startDate={moment(this.props.startDate).format('MM-DD-YYYY')}
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