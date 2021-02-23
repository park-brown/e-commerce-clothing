import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './crown.svg';
import { Cart } from '../Cart/Cart';
import { CartDropDown } from '../CartDropDown/CartDropDown';
import { auth } from '../../fireBase/fireBase.util';
import { useDispatch, useSelector } from 'react-redux';
import { userSignOut } from '../../features/userSlice';
import './Header.styles.scss';
import { createSelector } from '@reduxjs/toolkit';
export const Header = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => selectUser(state));
	const isOpen = useSelector((state) => selectCartIsOpen(state));

	return (
		<div className='header'>
			<Link to='/' className='logo-container'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link to='/shop' className='option'>
					Shop
				</Link>
				<Link to='/shop' className='option'>
					Contact
				</Link>

				{user.length === 0 ? (
					<Link className='option' to='/signIn'>
						SIGN IN
					</Link>
				) : (
					<div
						className='option'
						onClick={(() => auth.signOut(), () => dispatch(userSignOut()))}>
						SIGN OUT
					</div>
				)}
				<Cart />
			</div>
			{isOpen ? <CartDropDown /> : null}
		</div>
	);
};

const selectUser = createSelector(
	(state) => state.user,
	(user) => user,
);

const selectCartIsOpen = createSelector(
	(state) => state.cart,
	(cart) => cart.IsOpen,
);
