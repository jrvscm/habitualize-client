import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginForm from './LoginForm';
import './Navbar.css';
import './Footer.css';
import './LoginPage.css';
import '../reset.css';

class LoginPage extends Component {

		render() {

		if(this.props.loggedIn) {
			return <Redirect to="/dashboard" />;
		}
		
		return(
		<div className={'login-form-wrapper'}>	
			<Navbar />
				<div className="login-form-container">		
					<section className="login-section">
						<LoginForm />
					</section>
				</div>
			<Footer title={'Built by JrvscM'} /> 
		</div>
		);
	}
}

const mapStateToProps = (state) => ({
	loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps) (LoginPage);