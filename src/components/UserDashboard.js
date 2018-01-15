import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from  './Footer';
import ListedHabit from './ListedHabit';
import SimpleModal from './Modal';
import LoadingSpinner from './LoadingSpinner';
import * as FontAwesome from 'react-icons/lib/fa';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
	setCurrentHabit,   
	getUserHabitsRequest,
	deleteHabitRequest,
	setLoadingFalse,
	setLoadingTrue
} from '../actions';
import {
	saveCurrentHabit
} from '../local-storage';
import '../reset.css';
import '../App.css';
import './Navbar.css';
import './Footer.css';
import './ListedHabit.css';
import './UserDashboard.css';

class UserDashboard extends Component {

	componentDidMount() {
	this.props.dispatch(setLoadingTrue());
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
		saveCurrentHabit(habit);
		this.props.dispatch(setCurrentHabit(habit));
	}

	deleteClick(e, habit) {
		this.props.dispatch(deleteHabitRequest(habit, this.props.authToken, this.props.currentUser))
		setTimeout(() => {
			this.props.dispatch(setLoadingFalse())
			}, 1000);
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
			<div className={'delete-button-container'} onClick={(e) => this.deleteClick(e, habit)}>
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
				
				<div className={'delete-button-container'}>
					<button onClick={(e) => this.deleteClick(e, habit)}><FontAwesome.FaClose /></button>
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
		<div className="habits-container">	
			<Navbar />
				<header className={'username-header'}>
					<h2>{this.props.currentUser.username}</h2>
				</header>
			<SimpleModal />

		<div>
			<ul className='user-habit-list'>
				{userHabits}
			</ul>
		</div>
			
			<div>
				<Footer title={'Built by JrvscM'} />
			</div>
		</div>
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