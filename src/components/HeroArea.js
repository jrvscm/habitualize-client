import React, { Component } from 'react';
import './HeroArea.css';

class HeroArea extends Component {
	render() {
		return (
				<div className="hero-area">	
					<section>
						<header>
							<h1>{this.props.title}</h1>
							<h2>{this.props.hook}</h2>
						</header>
					</section>
				</div>	
		);
	}
}

export default HeroArea;