import React from 'react';
import { CustomButton } from '../SignIn-and-SignUp-Page/CustomButton';
import { addItem } from '../../features/cartSlice';
import { useDispatch } from 'react-redux';
import './Card.styles.scss';
export const Card = ({ item }) => {
	const dispatch = useDispatch();
	const { imageUrl, name, price } = item;

	return (
		<div className='collection-item'>
			<div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton
				inverted
				onClick={() => {
					dispatch(addItem(item));
				}}>
				Add To Cart
			</CustomButton>
		</div>
	);
};
