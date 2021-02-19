import React, { useState } from 'react';
import './signUp.styles.scss';
import { FormInput } from './FormInput';
import { CustomButton } from './CustomButton';
import { auth, createUserProfileDocument } from '../../fireBase/fireBase.util';
export const SignUp = () => {
	const [name, setname] = useState('');
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');
	const [confirmedpassword, setconfirmedpassword] = useState('');

	// const handleSubmit = async (Event) => {
	// 	Event.prevent.default();
	// 	if (password !== confirmedpassword) {
	// 		alert('password do not match');
	// 		return;
	// 	}
	// 	try {
	// 		const { user } = await auth.createUserWithEmailAndPassword(
	// 			email,
	// 			password,
	// 		);
	// 		createUserProfileDocument(user, { name });
	// 		setconfirmedpassword('');
	// 		setemail('');
	// 		setpassword('');
	// 		setname('');
	// 	} catch (error) {
	// 		console.log(error.message);
	// 	}
	// };
	//pull from lesson 10
	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmedpassword) {
			alert("passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password,
			);

			await createUserProfileDocument(user, { name });

			setname('');
			setemail('');
			setpassword('');
			setconfirmedpassword('');
		} catch (error) {
			console.error(error);
		}
	};

	const handleTextChange = (e) => {
		setname(e.target.value);
	};
	const handleEmailChange = (e) => {
		setemail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setpassword(e.target.value);
	};
	const handleConfirmPassword = (e) => {
		setconfirmedpassword(e.target.value);
	};

	return (
		<div className='sign-up'>
			<h2 className='title'>I do not have an account</h2>
			<span>sign up with your email and password</span>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					onChange={handleTextChange}
					type='text'
					name='name'
					value={name}
					label='Name'
					required></FormInput>
				<FormInput
					onChange={handleEmailChange}
					type='email'
					name='email'
					value={email}
					label='email'
					required></FormInput>
				<FormInput
					onChange={handlePasswordChange}
					type='password'
					name='password'
					value={password}
					label='password'
					required></FormInput>
				<FormInput
					onChange={handleConfirmPassword}
					type='password'
					name='confirmedPassword'
					value={confirmedpassword}
					label='confirmPassword'
					required></FormInput>
				<CustomButton type='submit'> Sign up</CustomButton>
			</form>
		</div>
	);
};
