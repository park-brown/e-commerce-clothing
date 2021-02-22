import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../Cart/Cart.svg';
import { toggleCartDropDown } from '../../features/cartSlice';
import '../Cart/Cart.styles.scss';
export const Cart = () => {
	const dispatch = useDispatch();

	return (
		<div className='cart-icon' onClick={() => dispatch(toggleCartDropDown())}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>0</span>
		</div>
	);
};
