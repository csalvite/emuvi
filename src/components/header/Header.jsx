import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TokenContext } from '../..';
import { ProfileHeader } from '../../components/users/ProfileHeader';
import { LoginButton } from '../users/LoginButton';
import SearchBar from './SearchBar';

import './Header.css';

function Header1() {
	const [token] = useContext(TokenContext);

	return (
		<div>
			<header>
				<video
					autoPlay
					loop
					muted
					src="./resources/videos/EMUVI.mp4"
					className="playVideo">
					Video cannot be loaded :(
				</video>
				<nav>
					<a href="/" className="main-logo">
						<i className="fas fa-globe-africa"></i>EMUVI
					</a>

					<SearchBar />

					{/* <div className="search_box">
            <input type="search" placeholder="Encontrar algo..." />
            <span className="fa fa-search"></span>
          </div> */}

					{token ? <ProfileHeader /> : <LoginButton />}
				</nav>

				<div className="header-container">
					<h2 className="header-title">EL MUNDO VINTAGE</h2>
					<h3 className="header-subtitle">COMPRA-VENTA DE ARTÍCULOS RETRO</h3>
					<Link to="/products">
						<button className="products-button">PRODUCTOS</button>
					</Link>
				</div>
			</header>
		</div>
	);
}

export default Header1;
