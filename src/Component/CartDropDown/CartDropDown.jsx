import React from 'react';
import { CustomButton } from '../SignIn-and-SignUp-Page/CustomButton';
import '../CartDropDown/CartDropDown.styles.scss';
export const CartDropDown = () => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'></div>
			<CustomButton> go to check out</CustomButton>
		</div>
	);
};
