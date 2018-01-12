import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import LoginForm from './LoginForm';
import './Navbar.css';
import './LoginPage.css';
import '../reset.css';

class LoginPage extends Component {

		render() {

		if(this.props.loggedIn) {
			return <Redirect to="/dashboard" />;
		}
		
		return(
		<Grid fluid>
		<Navbar />
			<Row>
					<div className="login-form-container">		
						<section className="login-section">
							<LoginForm />
						</section>
					</div>
			</Row>
		</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps) (LoginPage);