import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../Cart/Cart.svg';
import { toggleCartDropDown } from '../../features/cartSlice';
import '../Cart/Cart.styles.scss';
import { createSelector } from '@reduxjs/toolkit';
export const Cart = () => {
	const dispatch = useDispatch();

	const total = useSelector((state) => totalSumSelector(state));

	return (
		<div className='cart-icon' onClick={() => dispatch(toggleCartDropDown())}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{total}</span>
		</div>
	);
};

const totalSumSelector = createSelector(
	(state) => state.cart,
	(cart) => cart.cartItems.reduce((acc, item) => acc + item.quantity, 0),
);
