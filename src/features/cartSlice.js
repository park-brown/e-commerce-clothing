import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	IsOpen: false,
	cartItems: [],
};
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		toggleCartDropDown: (state, action) => {
			state.IsOpen = !state.IsOpen;
		},
		addItem: (state, action) => {
			const { id } = action.payload;
			const existingCartItem = state.cartItems.find((item) => item.id === id);
			if (existingCartItem) {
				existingCartItem.quantity === undefined
					? (existingCartItem.quantity = 1)
					: (existingCartItem.quantity += 1);
			} else state.cartItems.push(action.payload);
		},
	},
});

export const { toggleCartDropDown, addItem } = cartSlice.actions;

export default cartSlice.reducer;
