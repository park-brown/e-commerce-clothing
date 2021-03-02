import React from 'react';
import { useSelector } from 'react-redux';
import { CheckOutItem } from '../CheckOutItem/CheckOutItem';
import { createSelector } from '@reduxjs/toolkit';
import Hidden from '@material-ui/core/Hidden';
import '../CheckOut/CheckOut.styles.scss';
import { useStyles } from './styles';
export const CheckOut = () => {
	const cartItems = useSelector((state) => selectCartItems(state));
	const total = useSelector((state) => totalPrice(state));
	const classes = useStyles();

	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='checkout-block'>
					<span>Product</span>
				</div>
				<Hidden xsDown>
					<div className='checkout-block'>
						<span>Description</span>
					</div>
				</Hidden>

				<div className='checkout-block'>
					<span>Quantity</span>
				</div>
				<div className='checkout-block'>
					<span>Price</span>
				</div>
				<div className='checkout-block'>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((item) => (
				<CheckOutItem cartItem={item} key={item.id} />
			))}
			<div className={classes.total}>total : ${total}</div>
		</div>
	);
};

const totalPrice = createSelector(
	(state) => state.cart,
	(cart) =>
		cart.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
);

const selectCartItems = createSelector(
	(state) => state.cart,
	(cart) => cart.cartItems,
);
