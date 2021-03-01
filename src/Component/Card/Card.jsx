import React from 'react';
import { CustomButton } from '../SignIn-and-SignUp-Page/CustomButton';
import { addItem } from '../../features/cartSlice';
import { useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Card.styles.scss';

export const Card = ({ item }) => {
	const dispatch = useDispatch();
	const { imageUrl, name, price } = item;

	return (
		<Grid item xs={12} md={4}>
			<Paper className='collection-item' elevation={6} variant='outlined'>
				<div
					className='image'
					style={{ backgroundImage: `url(${imageUrl})` }}
				/>
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
			</Paper>
		</Grid>
	);
};
