import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { HomePage } from './Component/HomePage/HomePage';
import { Category } from './Component/CategoryPage/Category';
import { ShopPage } from './Component/ShopPage/ShopPage';
import { Header } from './Component/Header/Header';
import { Container } from './Component/SignIn-and-SignUp-Page/Container';
import { CheckOut } from './Component/CheckOut/CheckOut';
import { auth, createUserProfileDocument } from './fireBase/fireBase.util.js';
import { userSignIn } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
function App() {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if ((user.length = 0)) {
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
				return;
			}
		});
	}, [dispatch]);

	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/shop/:category' component={Category} />
				<Route exact path='/shop' component={ShopPage} />
				<Route exact path='/checkout' component={CheckOut} />
				<Route
					exact
					path='/signIn'
					render={() =>
						user.length === 0 ? <Container /> : <Redirect to='/' />
					}
				/>
				<Route exact path='/' component={HomePage} />
			</Switch>
		</Router>
	);
}

export default App;
