import React, { Component } from 'react';
import './LoginForm.css';

class LoginPage extends Component {
	render() {
		return(
		<div className="login-form-container">	
			<header>
				<h3>{this.props.title}</h3>
			</header>
				<form className='login-form'>
            		<div>
              			<label htmlFor="username">Email</label>
              			<input type="text" name='username' id='username' />
            		</div>
            
            		<div>
              			<label htmlFor="password">Password</label>
              			<input type="password" name='password' id='password' />
            		</div>
            		<button type='submit'>Sign In</button>
        		</form>
		</div>
		);
	}
}

export default LoginPage;