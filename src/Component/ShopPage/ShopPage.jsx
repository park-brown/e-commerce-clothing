import React from 'react';
import SHOP_DATA from './ShopData';
import { CardContainer } from '../CardContainer/CardContainer';
import './shopPage.styles.scss';
export const ShopPage = () => {
	const shopData = SHOP_DATA;
	const renderShopPage = () =>
		shopData.map(({ id, ...other }) => (
			<CardContainer key={id} {...other}></CardContainer>
		));
	return <div className='shop-page'>{renderShopPage()}</div>;
};
