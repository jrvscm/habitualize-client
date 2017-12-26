import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	render() {
		return (	
				<div className="footer-container">
					<footer>
					{this.props.title}
					</footer>
				</div>
		);
	}
}

export default Footer;