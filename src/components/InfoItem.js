import React, { Component } from 'react';
import './InfoItem.css';

class InfoItem extends Component {
	render() {
		return(
		<div className="info-item">	
			<section className="info-item-section">
				<header className="info-item-header">
					<h4>{this.props.title}</h4>
					<p>{this.props.info}</p>
				</header>
			</section>
		</div>
		);
	}
}

export default InfoItem;