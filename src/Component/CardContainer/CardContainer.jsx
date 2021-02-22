import React from 'react';
import './CardContainer.styles.scss';
import { Card } from '../Card/Card';
export const CardContainer = ({ title, items }) => {
	return (
		<div className='collection-preview '>
			<h1 className='title'>{title}</h1>
			<div className='preview'>
				{items
					.filter((item, index) => index < 4)
					.map((item) => (
						<Card item={item} key={item.id} />
					))}
			</div>
		</div>
	);
};
