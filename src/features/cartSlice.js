import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	IsOpen: false,
	cartItems: [],
};
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		toggleCartDropDown: (state) => {
			state.IsOpen = !state.IsOpen;
		},
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
		removeItem: (state, action) => {
			return {
				...state,
				cartItems: state.cartItems.filter(
					(cartItem) => cartItem.id !== action.payload.cartItem.id,
				),
			};
		},
		incrementQuantity: (state, action) => {
			const {
				cartItem: { id },
			} = action.payload;
			const index = state.cartItems.findIndex((item) => item.id === id);
			state.cartItems[index].quantity += 1;
		},
		decrementQuantity: (state, action) => {
			const {
				cartItem: { id },
			} = action.payload;
			const index = state.cartItems.findIndex((item) => item.id === id);
			if (state.cartItems[index].quantity <= 1) {
				state.cartItems[index].quantity = 1;
			} else {
				state.cartItems[index].quantity -= 1;
			}
		},
	},
});

export const {
	toggleCartDropDown,
	addItem,
	removeItem,
	incrementQuantity,
	decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
