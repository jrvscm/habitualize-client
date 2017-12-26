import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './NavLink.css';

class NavLink extends Component {
	render() {
		return(
			<div className="navlink-container">
				<header>
					<h6><Link to={`${this.props.address}`} className="nav-link">{this.props.title}</Link></h6>
				</header>
			</div>
		);
	}
}

export default NavLink;