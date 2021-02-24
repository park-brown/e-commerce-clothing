import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { CardContainer } from '../CardContainer/CardContainer';
import './shopPage.styles.scss';
const selectShop = createSelector(
	(state) => state.shop,
	(shop) => shop,
);
export const ShopPage = () => {
	const shopData = useSelector((state) => selectShop(state));
	const renderShopPage = () =>
		shopData.map(({ id, ...other }) => (
			<CardContainer key={id} {...other}></CardContainer>
		));
	return <div className='shop-page'>{renderShopPage()}</div>;
};
