import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MenuItem } from '../MenuItem/MenuItem';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import './Menu.styles.scss';
const selectHomeData = createSelector(
	(state) => state.home,
	(home) => home,
);

export const Menu = () => {
	const data = useSelector((state) => selectHomeData(state));

	return (
		<Grid className='menu' container>
			{data.map(({ title, id, imageUrl, linkUrl }) => (
				<MenuItem
					key={id}
					title={title}
					imageUrl={imageUrl}
					linkUrl={linkUrl}
				/>
			))}
		</Grid>
	);
};
