import React, { useEffect } from 'react';
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
import { userSignIn } from './features/userSlice';
import { useDispatch } from 'react-redux';
function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				const userRef = await createUserProfileDocument(user);

				userRef.onSnapshot((snapshot) => {
					dispatch(
						userSignIn({
							id: snapshot.id,
							...snapshot.data(),
						}),
					);
				});
			} else {
				// dispatch(userAdded(user));
			}
		});
	}, [dispatch]);

	return (
		<Router>
			<Header />
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
