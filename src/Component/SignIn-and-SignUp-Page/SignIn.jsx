import React, { useState } from 'react';
import { FormInput } from './FormInput';
import { CustomButton } from './CustomButton';
import { useStyles } from './siginIn.styles';
import './signIn.styles.scss';
import { signInWithGoogle, auth } from '../../fireBase/fireBase.util';
export const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await auth.signInWithEmailAndPassword(email, password);
			setEmail('');
			setPassword('');
		} catch (error) {
			console.log(error);
		}
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const classes = useStyles();

	return (
		<div className={classes.signIn}>
			<h2 className={classes.h2}>already have an account ?</h2>
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
				<div className={classes.buttonGroup}>
					<CustomButton type='submit'>Sign In</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Google sign in
					</CustomButton>
				</div>
			</form>
		</div>
	);
};
