import React from 'react';
import {
	removeItem,
	incrementQuantity,
	decrementQuantity,
} from '../../features/cartSlice';
import { useDispatch } from 'react-redux';
import '../CheckOutItem/Item.styles.scss';
export const CheckOutItem = (cartItem) => {
	const {
		cartItem: { imageUrl, name, price, quantity },
	} = cartItem;
	const dispatch = useDispatch();

	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img alt='item' src={imageUrl} />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div
					className='arrow'
					onClick={() => {
						dispatch(decrementQuantity(cartItem));
					}}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div
					className='arrow'
					onClick={() => dispatch(incrementQuantity(cartItem))}>
					&#10095;
				</div>
			</span>
			<span className='price'>{price}</span>
			<div
				className='remove-button'
				onClick={() => dispatch(removeItem(cartItem))}>
				&#10006;
			</div>
		</div>
	);
};
