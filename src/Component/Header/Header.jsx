import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './crown.svg';
import { Cart } from '../Cart/Cart';
import { CartDropDown } from '../CartDropDown/CartDropDown';
import { auth } from '../../fireBase/fireBase.util';
import { useDispatch, useSelector } from 'react-redux';
import { userSignOut } from '../../features/userSlice';
import './Header.styles.scss';
import { createSelector } from '@reduxjs/toolkit';
import { useStyles } from './styles';

export const Header = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => selectUser(state));
	const isOpen = useSelector((state) => selectCartIsOpen(state));
	const classes = useStyles();

	return (
		<div className={classes.header}>
			<AppBar position='static' classes={{ root: classes.root }}>
				<Toolbar classes={{ root: classes.toolbar }}>
					<IconButton component={Link} to='/'>
						<Logo className='logo' />
					</IconButton>
					<div>
						<Button
							component={Link}
							to='/shop'
							classes={{ label: classes.button }}>
							shop
						</Button>
						{user.length === 0 ? (
							<Button
								component={Link}
								to='/signIn'
								classes={{ label: classes.button }}>
								sign in
							</Button>
						) : (
							<Button
								component={Link}
								classes={{ label: classes.button }}
								onClick={(() => auth.signOut(), () => dispatch(userSignOut()))}>
								{' '}
								sign out
							</Button>
						)}

						<IconButton>
							<Cart />
						</IconButton>
					</div>
					{isOpen ? <CartDropDown /> : null}
				</Toolbar>
			</AppBar>
			{/* <Link to='/' className='logo-container'></Link>
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
			{isOpen ? <CartDropDown /> : null} */}
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
