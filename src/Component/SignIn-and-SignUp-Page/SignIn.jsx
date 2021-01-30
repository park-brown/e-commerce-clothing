import React, { useState } from 'react';
import { FormInput } from './FormInput';
import { CustomButton } from './CustomButton';
import './signIn.styles.scss';
export const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		setEmail('');
		setPassword('');
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					type='email'
					value={email}
					label='email'
					handleChange={handleEmailChange}
					required
				/>
				<FormInput
					name='password'
					type='password'
					value={password}
					label='password'
					handleChange={handlePasswordChange}
					required
				/>

				<CustomButton type='submit'>Sign In</CustomButton>
			</form>
		</div>
	);
};
