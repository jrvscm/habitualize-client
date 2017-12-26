import React, { Component } from 'react';
import './ListedHabit.css';

class ListedHabit extends Component {
	render() {
		return(
			<section className="listed-habit">
				<header>
					<h3>{this.props.name}</h3>
					<p>{this.props.date}</p>
					<p>[PLACEHOLDER FOR STREAK VISUAL]</p>
				</header>
			</section>
		);
	}
}

export default ListedHabit;
