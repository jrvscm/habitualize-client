import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-flexbox-grid';
import Navbar from './Navbar';
import LoginForm from './LoginForm';
import './Navbar.css';
import './LoginPage.css';

class LoginPage extends Component {
	render() {
		return(
		<Grid fluid>
		<Navbar />
			<Row>
				<Col xs={12}>
					<Row center="xs">
						<Col xs={4}>
							<div className="login-form-container">		
								<section className="login-section">
									<LoginForm />
								</section>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</Grid>
		);
	}
}

export default LoginPage;