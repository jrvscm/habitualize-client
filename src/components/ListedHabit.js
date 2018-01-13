import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import moment from 'moment';
import '../reset.css';
import '../App.css';
import './ListedHabit.css';

class ListedHabit extends Component {
	render() {
		return(	
		<Grid fluid>
			<section className={"listed-habit"}>
				<Row>
					<Col xs>
						<header className={'listed-habit-header'}>
							<h3>{this.props.name}</h3>
						</header>
					</Col>
					<Col xs>		
						<div className={'start-date-container'}>
							<p>{moment(this.props.startdate).format('MM-DD-YYYY')}</p>
						</div>
					</Col>		
				</Row>
			</section>
		</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	currentHabit: state.HabitStatsReducer.currentHabit,
	habitName: state.HabitStatsReducer.currentHabit.name,
	streak: state.HabitStatsReducer.currentHabit.streak
})

export default connect(mapStateToProps) (ListedHabit);
