import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from  './Footer';
import ListedHabit from './ListedHabit';
import HeroArea from './HeroArea';
import {Grid, Row, Col } from 'react-flexbox-grid';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentHabit, SET_CURRENT_HABIT } from '../actions';
import './Footer.css';
import './Navbar.css';
import './ListedHabit.css';
import './UserDashboard.css';

class UserDashboard extends Component {

	liClick(e, habit) {
		this.props.dispatch(setCurrentHabit(habit))
	}

	render() {

		if(this.props.loggedOut) {
			return <Redirect to="/home" />;
		}

		const UserHabits = this.props.habits.map((habit, index) =>
			<li key={index} index={index}
					{...habit}	className="listed-habit" onClick={(e) => this.liClick(e, habit)}>
				
				<Link to="/stats">
					<ListedHabit 
					name={habit.name}
					date={habit.date}
					/>
				</Link>
			</li>
		);
		
		return (

	<Grid fluid>

		<div className="habits-container">	
			<Row>
				<Col xs>
					<Navbar />
				</Col>
			</Row>

			<Row>
				<Col xs>
					<HeroArea title={'My Habits'} />
				</Col>
			</Row>


			<Row>
				<Col xs>
					<ul className='user-habit-list'>
						{UserHabits}
					</ul>
					
				</Col>
			</Row>


			<Row>
				<Col xs>
					<div>
						<Footer title={'Footer Stuff'} />
					</div>
				</Col>
			</Row>
		</div>

	</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	habits: state.UserDashboardReducer.habits,
	loggedOut: state.auth.currentUser == null
})

export default connect(mapStateToProps) (UserDashboard);