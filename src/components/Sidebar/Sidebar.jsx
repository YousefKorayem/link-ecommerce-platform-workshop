import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

import './Sidebar.scss';

import { FaShoppingCart } from 'react-icons/fa';

const Sidebar = ({ isOpen, onClose }) => {
  const { cartItems } = useCart();

  const navigate = useNavigate();

  const handleClickCart = () => {
        navigate(`/cart`);
      };


  return (
    <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <button className="sidebar__close" onClick={onClose}>×</button>
        <button className="sidebar__nav--login">Log In</button>
        <button className="sidebar__nav--signup">Sign Up</button>
        <button className="sidebar__nav--cart" onClick={handleClickCart}>
            <FaShoppingCart />
            {cartItems.length > 0 && (
                <div className="sidebar__nav--cart-badge">{cartItems.length}</div>
            )}
        </button>
        
    </div>
  );
};

export default Sidebar;
