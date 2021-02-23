import React from 'react';
import { CartItem } from '../CartItem/CartItem';
import { useSelector } from 'react-redux';
import { CustomButton } from '../SignIn-and-SignUp-Page/CustomButton';
import '../CartDropDown/CartDropDown.styles.scss';
import { createSelector } from '@reduxjs/toolkit';
export const CartDropDown = () => {
	const cartItems = useSelector((state) => selectCartItems(state));
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
			</div>
			<CustomButton> go to check out</CustomButton>
		</div>
	);
};

const selectCartItems = createSelector(
	(state) => state.cart,
	(cart) => cart.cartItems,
);
