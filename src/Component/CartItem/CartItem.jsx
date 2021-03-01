import React from 'react';
import '../CartItem/CartItem.styles.scss';
export const CartItem = ({ item }) => {
	const { imageUrl, price, name, quantity } = item;

	return (
		<div className='cart-item' key={imageUrl}>
			<img src={imageUrl} alt='item' />
			<div className='item-details'>
				<span className='name'>{name}</span>
				<span className='price'>
					{quantity} *${price}
				</span>
			</div>
		</div>
	);
};
