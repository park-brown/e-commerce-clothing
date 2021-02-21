import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: [],
	reducers: {
		userSignIn: (state, action) => {
			state.push(action.payload);
		},
	},
});

export const { userSignIn } = userSlice.actions;
export default userSlice.reducer;
