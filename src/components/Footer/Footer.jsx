import { FaFacebookF, FaGithub, FaGoogle, FaXTwitter, FaMicrosoft } from 'react-icons/fa6';
import logo from '../../assets/logo2.svg';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Column A - Logo */}
        <div className="footer-column">
          <img src={logo} alt="Company Logo" className="footer-logo" />
        </div>

        {/* Column B - Paragraph */}
        <div className="footer-column hide-on-mobile">
          <p className="footer-description">
            Empowering learners through accessible and engaging online education.
Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences. 
          </p>
        </div>

        {/* Column C - Help/Contact */}
        <div className="footer-column">
          <h3 className="footer-heading">Get Help</h3>
          <p>Contact Us</p>
          <p>Latest Articles</p>
          <p>FAQ</p>
        </div>

        {/* Divider between C and D (desktop only) */}
        <div className="footer-divider mobile-only" />

        {/* Column D - Address & Social */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>
          <p>Address: 123 Main Street, Anytown, CA 12345</p>
          <p>Tel: +(123) 456-7890</p>
          <p>Mail: bywayedu@webkul.in</p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaGoogle /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaMicrosoft /></a>
          </div>
        </div>
      </div>

      <hr className="divider" />

      <p className="copyright">
        Copyright &copy; 2024 Link Development. All rights reserved
      </p>
    </footer>
  );
}
