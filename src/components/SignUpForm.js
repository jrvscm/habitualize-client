import React, { Component } from 'react';
import './SignUpForm.css';

class SignUpForm extends Component {
	render() {
		return(
		<div className="sign-form-up-container">
		<section>	
			<header>
				<h3>{this.props.title}</h3>
			</header>
			<form className='signup-form'>
            	<div>
              		<label htmlFor="first-name">First name</label>
              		<input placeholder='First Name' type="text" name='first-name' id='first-name' />
            	</div>
            
            	<div>
              		<label htmlFor="last-name">Last name</label>
              		<input type="text" name='last-name' id='last-name' placeholder='Last Name' />
            	</div>
            
            	<div>
              		<label htmlFor="username">Email</label>
              		<input type="text" name='username' id='username' />
            	</div>
            
            	<div>
              		<label htmlFor="password">Password</label>
              		<input type="password" name='password' id='password' />
            	</div>
            	<button type='submit'>Sign Up</button>
        	</form>
        </section>
		</div>
		);
	}
}

export default SignUpForm;