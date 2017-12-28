import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ListedHabit.css';

class ListedHabit extends Component {
	render() {
		return(
			<section className="listed-habit">
				<header>
					<h3>{this.props.name}</h3>
					<p>{this.props.date}</p>
					[PLACEHOLDER FOR CALENDAR]
				</header>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	currentHabit: state.HabitStatsReducer.currentHabit,
	habitName: state.HabitStatsReducer.currentHabit.name,
	streak: state.HabitStatsReducer.currentHabit.streak,
	startDate: state.HabitStatsReducer.currentHabit.date
})

export default connect(mapStateToProps) (ListedHabit);
