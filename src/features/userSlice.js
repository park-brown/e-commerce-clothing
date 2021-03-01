import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: [],
	reducers: {
		userSignIn: (state, action) => {
			if (state.length === 0) {
				state.push(action.payload);
			}
		},
		userSignOut: (state, action) => {
			state.splice(0, 1);
		},
	},
});

export const { userSignIn, userSignOut } = userSlice.actions;
export default userSlice.reducer;
