import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import { Link } from 'react-router-dom';
import '../reset.css';
import './Footer.css';

class Footer extends Component {
	render() {
		return (	
				<div className="footer-container">
					<footer>
					{this.props.title}
					<Link to='https://github.com/jrvscm' target={'_blank'}><FontAwesome.FaGithub /></Link>
					</footer>
				</div>
		);
	}
}

export default Footer;