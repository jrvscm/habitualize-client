import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from  './Footer';
import moment from 'moment';
import ListedHabit from './ListedHabit';
import HeroArea from './HeroArea';
import SimpleModal from './Modal';
import LoadingSpinner from './LoadingSpinner';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
	clearUserHabits,
	setCurrentHabit,   
	getUserHabitsRequest,
	deleteHabitRequest,
	setLoadingFalse,
	setLoadingTrue
} from '../actions';
import {
	setCurrentHabitId
} from '../local-storage';
import './Footer.css';
import './Navbar.css';
import './ListedHabit.css';
import './UserDashboard.css';

class UserDashboard extends Component {

	componentDidMount() {

  	window.scrollTo(0, 0)

	if(this.props.currentUser == null) {
		return true;
	} else {
		this.props.dispatch(getUserHabitsRequest(this.props.currentUser, this.props.authToken));
			setTimeout(() => {
			this.props.dispatch(setLoadingFalse());
			}, 1000);
		}
	}

	liClick(e, habit) {
		this.props.dispatch(setCurrentHabit(habit));
		setCurrentHabitId(habit.id)
	}

	deleteClick(e, habit) {
		this.props.dispatch(deleteHabitRequest(habit, this.props.authToken, this.props.currentUser))
		setTimeout(() => {
			this.props.dispatch(setLoadingFalse())
			}, 4000);
	}

	render() {

		if(this.props.loggedOut) {
			return <Redirect to="/home" />;
		}

		if(this.props.loading === true) {
			return (<LoadingSpinner />);
		}

		let userHabits;
		if(this.props.userHabits.length < 1) {
			userHabits = this.props.sampleHabits.map((habit, index) =>
			<li key={index} index={index}
					{...habit}	className="listed-habit">
			<div onClick={(e) => this.deleteClick(e, habit)}>
				<button >Delete</button>
			</div>
				<Link to="/stats">
					<ListedHabit onClick={(e) => this.liClick(e, habit)}
					name={habit.name}
					date={habit.startdate}
					/>
				</Link>
			</li>
			);
		} else {
			userHabits = this.props.userHabits.map((habit, index) =>
			<li key={index} index={index}
					{...habit}	className="listed-habit">
				
			<div>
				<button onClick={(e) => this.deleteClick(e, habit)}>Delete</button>
			</div>	

				<Link to="/stats" onClick={(e) => this.liClick(e, habit)}>
					<ListedHabit 
					name={habit.name}
					startdate={habit.startdate}
					/>
				</Link>
			</li>
			);
		}

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
					<p>These are just sample habits. When you create some of your own, this is how they will appear.</p>
					<SimpleModal />
				</Col>
			</Row>


			<Row>
				<Col xs>
					<ul className='user-habit-list'>
						{userHabits}
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
	loading: state.UserDashboardReducer.loading,
	sampleHabits: state.UserDashboardReducer.sampleHabits,
	userHabits: state.UserDashboardReducer.userHabits,
	currentUser: state.auth.currentUser,
	authToken: state.auth.authToken,
	streak: state.HabitStatsReducer.currentHabit.streak,
	loggedOut: state.auth.currentUser == null
})

export default connect(mapStateToProps) (UserDashboard);