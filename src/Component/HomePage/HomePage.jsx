import React from 'react';
import './Homepage.styles.scss';

export const HomePage = () => {
	return (
		<div className='HomePage'>
			<div className='menu'>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>Hats</h1>
						<span className='subtitle'>Shop now</span>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>Jackets</h1>
						<span className='subtitle'>Shop now</span>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>Sneakers</h1>
						<span className='subtitle'>Shop now</span>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>Women</h1>
						<span className='subtitle'>Shop now</span>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>Men</h1>
						<span className='subtitle'>Shop now</span>
					</div>
				</div>
			</div>
		</div>
	);
};
