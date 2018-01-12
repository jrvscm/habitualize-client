import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import './ListedHabit.css';

class ListedHabit extends Component {
	render() {
		return(
			<section className={"listed-habit"}>
				<header className={'listed-habit-header'}>
					<h3>{this.props.name}</h3>
					<p>{moment(this.props.startdate).format('MM-DD-YYYY')}</p>
				</header>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	currentHabit: state.HabitStatsReducer.currentHabit,
	habitName: state.HabitStatsReducer.currentHabit.name,
	streak: state.HabitStatsReducer.currentHabit.streak
})

export default connect(mapStateToProps) (ListedHabit);
