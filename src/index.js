import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import store from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import {
	ThemeProvider,
	createMuiTheme,
	responsiveFontSizes,
} from '@material-ui/core/styles';
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
let persistor = persistStore(store);
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
