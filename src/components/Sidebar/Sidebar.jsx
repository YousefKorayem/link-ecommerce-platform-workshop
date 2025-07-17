import React from 'react';

import './Sidebar.scss';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <button className="sidebar__close" onClick={onClose}>×</button>
      <button>Login</button>
      <button>Sign Up</button>
      <button>Cart</button>
    </div>
  );
};

export default Sidebar;
