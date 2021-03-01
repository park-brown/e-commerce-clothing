import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../Card/Card';
import '../CategoryPage/Category.styles.scss';
import Grid from '@material-ui/core/Grid';
export const Category = ({ match: { params } }) => {
	const param = params.category;
	const shopdata = useSelector((state) => state.shop);
	const id = paramToIdMap[param];
	const categorydata = shopdata.find((item) => item.id === id);

	return (
		<div className='collection-page'>
			<h2 className='title'>{categorydata.title}</h2>
			<Grid container className='items'>
				{categorydata.items.map((item) => (
					<Card key={item.id} item={item}></Card>
				))}
			</Grid>
		</div>
	);
};

const paramToIdMap = {
	hat: 1,
	sneaker: 2,
	jacket: 3,
	women: 4,
	men: 5,
};
