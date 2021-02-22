import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	IsOpen: false,
};
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		toggleCartDropDown: (state, action) => {
			state.IsOpen = !state.IsOpen;
		},
	},
});

export const { toggleCartDropDown } = cartSlice.actions;

export default cartSlice.reducer;
