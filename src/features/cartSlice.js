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
		// addItem: (state, action) => {
		// 	const { id } = action.payload;
		// 	const payload = action;
		// 	const existingCartItem = state.cartItems.find((item) => item.id === id);
		// 	if (existingCartItem) {
		// 		existingCartItem.quantity === undefined
		// 			? (existingCartItem.quantity = 2)
		// 			: (existingCartItem.quantity += 1);
		// 	} else state.cartItems.push(payload);
		// },
		addItem: {
			reducer(state, action) {
				const { id } = action.payload;
				const existingCartItem = state.cartItems.find((item) => item.id === id);
				if (existingCartItem) {
					existingCartItem.quantity += 1;
				} else {
					state.cartItems.push(action.payload);
				}
			},
			prepare(item) {
				const quantity = 1;
				return {
					payload: { ...item, quantity },
				};
			},
		},
	},
});

export const { toggleCartDropDown, addItem } = cartSlice.actions;

export default cartSlice.reducer;
