import React from 'react';

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
		<div className='menu'>
			{data.map(({ title, id, imageUrl, size, linkUrl }) => (
				<MenuItem
					key={id}
					title={title}
					imageUrl={imageUrl}
					size={size}
					linkUrl={linkUrl}
				/>
			))}
		</div>
	);
};
