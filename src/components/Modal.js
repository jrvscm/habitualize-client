import React, { Component } from 'react';
import Modal from 'simple-react-modal';
import * as FontAwesome from 'react-icons/lib/fa';
import { connect } from 'react-redux';
import { 
	setModalShow, 
	setCloseModal
} from '../actions/index';
import HabitForm from './HabitForm';
import '../reset.css';
import '../App.css';
import './Modal.css';

class SimpleModal extends Component {

	show() {
		this.props.dispatch(setModalShow());
	}

	close() {
		this.props.dispatch(setCloseModal());
	}

	render() {

		return(
			<div className={'create-habit-button-container'}>
      			<button id={'create-habit-button'} onClick={this.show.bind(this)}>Habit +</button>
      				<Modal
      					className="modal"
      					containerStyle={{background: 'transparent'}}
      					containerClassName="modalContainer"
      					closeOnOuterClick={false}
      					show={this.props.show}
      					onClose={this.close.bind(this)}>
      						
      						<div className={'modal-content'}>	<a className={'closeLink'} onClick={this.close.bind(this)}><FontAwesome.FaClose /></a>
      							<HabitForm authToken={this.props.authToken} currentUser={this.props.currentUser} />
      						</div>
      				</Modal>
      		</div>
		);
	}
}

const mapStateToProps = (state) => ({
	show: state.UserDashboardReducer.show,
	authToken: state.auth.authToken,
	currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(SimpleModal)