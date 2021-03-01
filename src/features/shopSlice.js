import { createSlice } from '@reduxjs/toolkit';

import SHOP_DATA from '../Component/ShopPage/ShopData';
const initialState = SHOP_DATA;

const shopSlice = createSlice({
	name: 'shop',
	initialState: initialState,
});
export default shopSlice.reducer;
// const initialState = { shopData: [], status: 'idle', error: null };

// const shopSlice = createSlice({
// 	name: 'shop',
// 	initialState: initialState,
// 	reducers: {},
// });

// export const fetchShop = createAsyncThunk('shop/fetchShop', async () => {
// 	const response = await fireStore
// 		.collection('/collection')
// 		.get()
// 		.then((snapshot) => {
// 			const data = snapshot.docs.map((doc) => {
// 				const { title, items } = doc.data();
// 				const id = doc.id;

// 				return { title, items, id };
// 			});
// 			return [...data];
// 		});
// });

// export default shopSlice.reducer;
