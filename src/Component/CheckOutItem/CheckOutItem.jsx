import React from 'react';
import '../CheckOutItem/Item.styles.scss';

export const CheckOutItem = (cartItem) => {
	const {
		cartItem: { imageUrl, name, price, quantity },
	} = cartItem;
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img alt='item' src={imageUrl} />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>{quantity}</span>
			<span className='price'>{price}</span>
			<div className='remove-button'>&#10006;</div>
		</div>
	);
};
