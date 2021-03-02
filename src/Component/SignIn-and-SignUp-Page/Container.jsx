import React from 'react';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import Hidden from '@material-ui/core/Hidden';
import './container.styles.scss';
export const Container = () => {
	return (
		<div className='sign-in-and-sign-up'>
			<SignIn />
			<Hidden smDown>
				<SignUp />
			</Hidden>
		</div>
	);
};
