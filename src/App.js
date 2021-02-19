import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './Component/HomePage/HomePage';
import { HatPage } from './Component/HatPage/HatPage';
import { JacketPage } from './Component/JacketPage/JacketPage';
import { MenPage } from './Component/MenPage/MenPage';
import { SneakerPage } from './Component/SneakerPage/SneakerPage';
import { WomenPage } from './Component/WomenPage/WomenPage';
import { ShopPage } from './Component/ShopPage/ShopPage';
import { Header } from './Component/Header/Header';
import { Container } from './Component/SignIn-and-SignUp-Page/Container';
import { auth, createUserProfileDocument } from './fireBase/fireBase.util.js';
function App() {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(
		() => {
			auth.onAuthStateChanged(async (user) => {
				if (user) {
					const userRef = await createUserProfileDocument(user);

					userRef.onSnapshot((snapshot) =>
						setCurrentUser({
							id: snapshot.id,
							...snapshot.data(),
						}),
					);
				} else {
					setCurrentUser(null);
				}
			});
		},
		[],
		console.log(currentUser),
	);

	return (
		<Router>
			<Header currentUser={currentUser} />
			<Switch>
				<Route exact path='/shop/hat' component={HatPage} />
				<Route exact path='/shop/jacket' component={JacketPage} />
				<Route exact path='/shop/men' component={MenPage} />
				<Route exact path='/shop/sneaker' component={SneakerPage} />
				<Route exact path='/shop/women' component={WomenPage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route exact path='/signIN' component={Container} />
				<Route exact path='/' component={HomePage} />
			</Switch>
		</Router>
	);
}

export default App;
