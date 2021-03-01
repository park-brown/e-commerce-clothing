import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from '../features/userSlice';
import cartReducer from '../features/cartSlice';
import homeReducer from '../features/homeSlice';
import shopReducer from '../features/shopSlice';
const reducers = combineReducers({
	user: userReducer,
	cart: cartReducer,
	home: homeReducer,
	shop: shopReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whiteList: ['cart'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			// Ignore these action types
			ignoredActions: [
				'user/userSignIn',
				'persist/REHYDRATE',
				'persist/PERSIST',
			],
			// Ignore these field paths in all actions
			ignoredActionPaths: ['meta.arg', 'payload.createdAt'],
			// Ignore these paths in the state
			ignoredPaths: ['state._persist'],
		},
	}),
});
