import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './crown.svg';
import { auth } from '../../fireBase/fireBase.util';
import './Header.styles.scss';

export const Header = ({ currentUser }) => {
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

				{currentUser ? (
					<div className='option' onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className='option' to='/signin'>
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};
