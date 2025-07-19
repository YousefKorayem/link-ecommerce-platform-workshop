// src/components/Header/Header.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

import './Header.scss';

import Sidebar from '../Sidebar/Sidebar';

import logo from '../../assets/logo.svg';
import hamburger from '../../assets/hamburger.svg';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { cartItems } = useCart();
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

      const navigate = useNavigate();
    
      const handleClick = () => {
        navigate(`/`);
      };

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo" onClick={handleClick}>
                    <button className="header__logo--button" aria-label="To Homepage">
                        <img className="header__logo--image" src={logo}/>
                    </button>
                </div>

                <div className="header__actions">
                {/* Hamburger menu on mobile */}
                <button className="header__menu--button" aria-label="Open Menu">
                    <img className="header__menu--image" src={hamburger} onClick={toggleSidebar}/>
                </button>

                {/* Menu buttons (in sidedbar on mobile, visible on large screens) */}
                <div className="header__nav">
                    <button className="header__nav--cart"><FaShoppingCart size={24} />
                        {cartItems.length > 0 && (
                        <span className="cart-count">{cartItems.length}</span>
                        )}</button>
                    <button className="header__nav--login">Log In</button>
                    <button className="header__nav--signup">Sign Up</button>
                </div>
                </div>

                <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            </div>
        </header>
    );
};

export default Header;