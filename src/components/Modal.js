import React, { Component } from 'react';
import Modal, {closeStyle} from 'simple-react-modal';
import { connect } from 'react-redux';
import { setModalShow, setCloseModal } from '../actions/index';
import HabitForm from './HabitForm';
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
			<div>
      			<button onClick={this.show.bind(this)}>Create New Habit</button>
      				<Modal
      					className="modal"
      					containerStyle={{background: 'transparent'}}
      					containerClassName="modalContainer"
      					closeOnOuterClick={false}
      					show={this.props.show}
      					onClose={this.close.bind(this)}>
      						
      						<div className={'modal-content'}>	<a className={'closeLink'} onClick={this.close.bind(this)}>X</a>
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