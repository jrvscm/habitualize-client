import React, { Component } from 'react';
import NavLink from './NavLink';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
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
						<NavLink address={'/'} title={'Log Out'} />
					</nav>
				</div>
			);
		}
	}
}

export default Navbar;