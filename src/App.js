import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './Component/HomePage/HomePage';
import { HatPage } from './Component/HatPage/HatPage';
import { JacketPage } from './Component/JacketPage/JacketPage';
import { MenPage } from './Component/MenPage/MenPage';
import { SneakerPage } from './Component/SneakerPage/SneakerPage';
import { WomenPage } from './Component/WomenPage/WomenPage';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/shop/hat' component={HatPage} />
				<Route exact path='/shop/jacket' component={JacketPage} />
				<Route exact path='/shop/men' component={MenPage} />
				<Route exact path='/shop/sneaker' component={SneakerPage} />
				<Route exact path='/shop/women' component={WomenPage} />
				<Route exact path='/' component={HomePage} />
			</Switch>
		</Router>
	);
}

export default App;
