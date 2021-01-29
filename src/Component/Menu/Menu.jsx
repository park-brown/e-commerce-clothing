import React from 'react';
import { sections } from '../../10.1 directory.data.js.js';
import { MenuItem } from '../MenuItem/MenuItem';
import './Menu.styles.scss';
export const Menu = () => {
	const menus = sections;

	return (
		<div className='menu'>
			{menus.map(({ title, id, imageUrl, size }) => (
				<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
			))}
		</div>
	);
};
