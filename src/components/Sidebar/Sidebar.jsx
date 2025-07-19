import React from 'react';

import './Sidebar.scss';

import cart from '../../assets/cart.svg';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <button className="sidebar__close" onClick={onClose}>×</button>
        <button className="sidebar__nav--login">Log In</button>
        <button className="sidebar__nav--signup">Sign Up</button>
        <button className="sidebar__nav--cart"><img className="sidebar__nav--cart--icon" src={cart}/></button>
        
    </div>
  );
};

export default Sidebar;
