import React from 'react';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import './container.styles.scss';
export const Container = () => {
	return (
		<div className='sign-in-and-sign-up'>
			<SignIn />
			<SignUp />
		</div>
	);
};
