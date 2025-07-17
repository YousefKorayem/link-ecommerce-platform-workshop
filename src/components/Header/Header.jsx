// src/components/Header/Header.jsx
import './Header.scss';
import logo from '../../assets/logo.svg';
import hamburger from '../../assets/hamburger.svg';
import cart from '../../assets/cart.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
            <button className="header__logo--button" aria-label="To Homepage">
                <img className="header__logo--image" src={logo}/>
            </button>
        </div>

        <div className="header__actions">
          {/* Hamburger menu on mobile */}
          <button className="header__menu--button" aria-label="Open Menu">
            <img className="header__menu--image" src={hamburger}/>
          </button>

          {/* Menu buttons (in sidedbar on mobile, visible on large screens) */}
          <div className="header__nav">
            <button className="header__nav--cart"><img className="header__nav--cart--icon" src={cart}/></button>
            <button className="header__nav--login">Login</button>
            <button className="header__nav--signup">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
}