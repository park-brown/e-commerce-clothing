import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './CardContainer.styles.scss';
import { Card } from '../Card/Card';
export const CardContainer = ({ title, items }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('xs'));
	return (
		<div className='collection-preview '>
			<h1 className='title'>{title}</h1>
			<div className='preview'>
				{items
					.filter((item, index) => (matches ? index < 1 : index < 4))
					.map((item) => (
						<Card item={item} key={item.id} />
					))}
			</div>
		</div>
	);
};
