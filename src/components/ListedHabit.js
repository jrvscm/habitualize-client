import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import moment from 'moment';
import '../reset.css';
import '../App.css';
import './ListedHabit.css';

class ListedHabit extends Component {
	render() {
		let date = moment(this.props.startdate.startdate, 'MM-DD-YYYY').format('L');
		return(	
		<Grid fluid>
			<section className={"listed-habit"}>
				<Row className={'listed-habit-row'}>
					<Col xs>
						<header className={'listed-habit-header'}>
							<h3>{this.props.name}</h3>
						</header>
					</Col>
					<Col xs>		
						<div className={'start-date-container'}>
							<p>{date}</p>
						</div>
					</Col>		
				</Row>
			</section>
		</Grid>
		);
	}
}

export default ListedHabit;
