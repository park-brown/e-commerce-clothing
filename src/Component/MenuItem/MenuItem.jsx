import React from 'react';
import './MenuItem.styles.scss';
import { useHistory } from 'react-router-dom';

export const MenuItem = ({ title, imageUrl, size = '', linkUrl }) => {
	const history = useHistory();
	const handleClick = () => {
		history.push(`/${linkUrl}`);
	};
	return (
		<div className={`menu-item ${size}`} onClick={handleClick}>
			<div
				className='background-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	);
};
