import React, { Component } from 'react';
import Modal, {closeStyle} from 'simple-react-modal';
import { connect } from 'react-redux';
import { 
setCloseModal,
setRecordToFalse
} from '../actions/index';
import ShareButton from 'react-social-share-buttons';
import './NewBestStreakModal.css';

class BestStreakModal extends Component {
	close() {
		this.props.dispatch(setCloseModal());
		this.props.dispatch(setRecordToFalse());
	}

	render() {


		return(
			<div>
      			<Modal
      				className="modal"
      				containerStyle={{background: 'transparent'}}
      				containerClassName="modalContainer"
      				closeOnOuterClick={false}
      				show={this.props.show}
      				onClose={this.close.bind(this)}>
      						
      					<div className={'modal-content'}>	<a className={'closeLink'} onClick={this.close.bind(this)}>X</a>
      						<p>Contratulations!</p> 
      						<p>You have a {this.props.longestStreak} Day(s) streak going!</p> 
      						<p>Keep up the good work!</p>
        						<ShareButton
                				compact
                				socialMedia={'facebook'}
                				url={"https://habitualize.com"}
                				media={'/*add screenshot of UI*/'}
                				text="I set a new record on Habitualize!"
            					/>
            					<ShareButton
                				compact
                				socialMedia={'twitter'}
                				url={"https://habitualize.com"}
                				media={'/*add screenshot of UI*/'}
                				text="I set a new record on Habitualize!"
            					/>

      					</div>
      			</Modal>
      		</div>
		);
	}
}

const mapStateToProps = (state) => ({
	show: state.UserDashboardReducer.show,
	longestStreak: state.HabitStatsReducer.longestStreak,
	currentStreak: state.HabitStatsReducer.currentStreak
})

export default connect(mapStateToProps)(BestStreakModal)