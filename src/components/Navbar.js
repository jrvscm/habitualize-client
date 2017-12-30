import React, { Component } from 'react';
import { clearAuth, CLEAR_AUTH } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import NavLink from './NavLink';
import './Navbar.css';

class Navbar extends Component {

	logOut(e) {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	render() {

		if(window.location.href.indexOf('/home') > -1 ||
			window.location.href.indexOf('/login') > -1 ) {
		
		return(
				<div className="navbar-container">
					<nav>
						<NavLink address={'/login'} title={'Sign In'} />
						<NavLink address={'/home'} title={'Home'} />
					</nav>
				</div>
			);
	} else {
		return(
				<div className="navbar-container">
					<nav>
						<NavLink address={'/dashboard'} title={'Home'} />
						<NavLink address={'/stats'} title={'Stats'} />
						<NavLink address={'/home'} onClick={(e) => this.props.logOut(e)} title={'Log Out'} />
					</nav>
				</div>
			);
		}
	}
}

export default Navbar;