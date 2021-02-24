import { createSlice } from '@reduxjs/toolkit';
import SHOP_DATA from '../Component/ShopPage/ShopData';
const initialState = SHOP_DATA;

const shopSlice = createSlice({
	name: 'shop',
	initialState: initialState,
});
export default shopSlice.reducer;
