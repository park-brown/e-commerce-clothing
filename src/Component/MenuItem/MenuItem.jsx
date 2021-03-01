import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './MenuItem.styles.scss';
import { useHistory } from 'react-router-dom';

export const MenuItem = ({ title, imageUrl, linkUrl }) => {
	const history = useHistory();
	const handleClick = () => {
		history.push(`/${linkUrl}`);
	};
	return (
		<Grid item xs={12} lg={4}>
			<Paper
				variant='outlined'
				square
				className={`menu-item`}
				onClick={handleClick}>
				<div
					className='background-image'
					style={{ backgroundImage: `url(${imageUrl})` }}
				/>
				<div className='content'>
					<h1 className='title'>{title.toUpperCase()}</h1>
					<span className='subtitle'>SHOP NOW</span>
				</div>
			</Paper>
		</Grid>
	);
};
