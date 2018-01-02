import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from  './Footer';
import moment from 'moment';
import ListedHabit from './ListedHabit';
import HeroArea from './HeroArea';
import SimpleModal from './Modal';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
	clearUserHabits, CLEAR_USER_HABITS,
	setCurrentHabit, SET_CURRENT_HABIT, 
	getUserHabits, GET_USER_HABITS 
} from '../actions';
import './Footer.css';
import './Navbar.css';
import './ListedHabit.css';
import './UserDashboard.css';

class UserDashboard extends Component {
	componentDidMount() {
	if(this.props.currentUser == null) {
		return true;
	} else {
		this.props.dispatch(clearUserHabits());
		this.props.dispatch(getUserHabits(this.props.currentUser, this.props.authToken));
	}
}

	liClick(e, habit) {
		this.props.dispatch(setCurrentHabit(habit));
	}

	render() {

		if(this.props.loggedOut) {
			return <Redirect to="/home" />;
		}

		let userHabits;
		if(this.props.userHabits.length < 1) {
			userHabits = this.props.sampleHabits.map((habit, index) =>
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
		} else {
			userHabits = this.props.userHabits.map((habit, index) =>
			<li key={index} index={index}
					{...habit}	className="listed-habit" onClick={(e) => this.liClick(e, habit)}>
				
				<Link to="/stats">
					<ListedHabit 
					name={habit.name}
					date={moment(habit.date).format('MM-DD-YYYY')}
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
	sampleHabits: state.UserDashboardReducer.sampleHabits,
	userHabits: state.UserDashboardReducer.userHabits,
	currentUser: state.auth.currentUser,
	authToken: state.auth.authToken,
	loggedOut: state.auth.currentUser == null
})

export default connect(mapStateToProps) (UserDashboard);