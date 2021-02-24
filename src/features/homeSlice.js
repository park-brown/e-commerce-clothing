import { createSlice } from '@reduxjs/toolkit';
import { sections } from '../10.1 directory.data.js';

const initialState = sections;
const homeSlice = createSlice({
	name: 'home',
	initialState: initialState,
});

export default homeSlice.reducer;
