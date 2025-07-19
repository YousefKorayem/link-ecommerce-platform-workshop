import { FaFacebookF, FaGithub, FaGoogle, FaXTwitter, FaMicrosoft } from 'react-icons/fa6';
import logo from '../../assets/logo.svg';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Company Logo" className="footer-logo" />

      <div className="footer-section">
        <h3 className="footer-heading">Get Help</h3>
        <p>Contact Us</p>
        <p>Latest Articles</p>
        <p>FAQ</p>
      </div>

      <hr className="divider" />

      <div className="footer-section">
        <h3 className="footer-heading">Contact Us</h3>
        <p>Address: 123 Main Street, Anytown, CA 12345</p>
        <p>Tel: +(123) 456-7890</p>
        <p>Mail: bywayedu@webkul.in</p>
      </div>

      <div className="social-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaGithub /></a>
        <a href="#"><FaGoogle /></a>
        <a href="#"><FaXTwitter /></a>
        <a href="#"><FaMicrosoft /></a>
      </div>

      <hr className="divider" />

      <p className="copyright">
        Copyright &copy; 2024 Link Development. All rights reserved
      </p>
    </footer>
  );
}
