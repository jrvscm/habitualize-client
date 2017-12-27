import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PercentSuccess.css';

class PercentSuccess extends Component {
	render() {
		return (	
			<div className={'percent-success statistics'}>
				{this.props.percentSuccess} % Success
			</div>
		);
	}
}

const mapPropsToState = (state) => ({
	percentSuccess: state.HabitStatsReducer.percentSuccess
})

export default connect(mapPropsToState) (PercentSuccess);