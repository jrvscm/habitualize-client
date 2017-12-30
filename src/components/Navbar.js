import React, { Component } from 'react';
import { clearAuth, CLEAR_AUTH } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { connect } from 'react-redux';
import NavLink from './NavLink';
import './Navbar.css';

class Navbar extends Component {

	logOut() {
		this.props.dispatch(clearAuth);
		clearAuthToken();
		window.location.href = '/home';
	}

	render() {
		//Only renders the button if were logged in.
		let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
		
		return(
				<div className="navbar-container">
					<nav>
						<NavLink address={'/dashboard'} title={'Home'} />
						{logOutButton}
					</nav>
				</div>
			);
		} else {

		return(
				<div className="navbar-container">
					<nav>
						<NavLink address={'/login'} title={'Sign In'} />
						<NavLink address={'/home'} title={'Home'} />
					</nav>
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps) (Navbar);