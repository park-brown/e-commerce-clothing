import React from 'react';
import { CartItem } from '../CartItem/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { CustomButton } from '../SignIn-and-SignUp-Page/CustomButton';
import { useHistory } from 'react-router-dom';
import { toggleCartDropDown } from '../../features/cartSlice';
import '../CartDropDown/CartDropDown.styles.scss';
import { createSelector } from '@reduxjs/toolkit';
export const CartDropDown = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const cartItems = useSelector((state) => selectCartItems(state));
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} item={item} />)
				) : (
					<span className='empty-message'>Your cart is empty </span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push('/checkout');
					dispatch(toggleCartDropDown());
				}}>
				go to check out
			</CustomButton>
		</div>
	);
};

const selectCartItems = createSelector(
	(state) => state.cart,
	(cart) => cart.cartItems,
);
