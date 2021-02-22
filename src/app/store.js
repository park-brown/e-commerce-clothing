import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import cartReducer from '../features/cartSlice';
export default configureStore({
	reducer: {
		user: userReducer,
		cart: cartReducer,
	},
	middleware: getDefaultMiddleware({
		serializableCheck: {
			// Ignore these action types
			ignoredActions: ['userSignIn'],
			// Ignore these field paths in all actions
			ignoredActionPaths: ['meta.arg', 'payload.createdAt'],
			// Ignore these paths in the state
			ignoredPaths: ['user.0.createdAt'],
		},
	}),
});
