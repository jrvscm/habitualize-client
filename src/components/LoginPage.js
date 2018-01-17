import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginForm from './LoginForm';
import './Navbar.css';
import './Footer.css';
import './LoginPage.css';
import '../reset.css';
import '../App.css';

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
						<p>Username: demo</p>
						<p>Password: demopassword</p>
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