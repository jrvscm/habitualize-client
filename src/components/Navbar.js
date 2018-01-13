import React, { Component } from 'react';
import { clearAuth, CLEAR_AUTH } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { connect } from 'react-redux';
import NavLink from './NavLink';
import '../reset.css';
import '../App.css';
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
                <button className={'log-out-button'} onClick={() => this.logOut()}>Log Out</button>
            );
		
		return(
				<div className={"navbar-container logged-in-nav"}>
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
						<NavLink className={'login-link'} address={'/home'} title={'Home'} />
						<NavLink address={'/login'} title={'Sign In'} />
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