import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import '../reset.css';
import './InfoItem.css';

class InfoItem extends Component {
	render() {
		if(this.props.title === 'Easy Tracking') {
		return(
		<div className="info-item">	
			<section className="info-item-section">
				<header className="info-item-header">
					<h4><FontAwesome.FaEdit /></h4>
					<h4>{this.props.title}</h4>
					<hr />
					<p>{this.props.info}</p>
				</header>
			</section>
		</div>
		);
	} else if(this.props.title === 'Compete Against Yourself') {
		return(
		<div className="info-item">	
			<section className="info-item-section">
				<header className="info-item-header">
					<h4><FontAwesome.FaUser /></h4>
					<h4>{this.props.title}</h4>
					<hr />
					<p>{this.props.info}</p>
				</header>
			</section>
		</div>
		);
	} else {
		return(
		<div className="info-item">	
			<section className="Info-Item-Section">
				<header className="info-item-header">
					<h4><FontAwesome.FaLineChart /></h4>
					<h4>{this.props.title}</h4>
					<hr />
					<p>{this.props.info}</p>
				</header>
			</section>
		</div>
		);
		}
	}
}

export default InfoItem;