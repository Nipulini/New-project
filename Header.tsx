import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Tredyne</Link> {/* Updated logo to navigate to the homepage */}
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/" className="home-link">Home</Link></li> {/* Link to home page */}
          <li><Link to="/shop" className="shop-link">Shop</Link></li> {/* Link to shop page */}
          <li><Link to="/aboutus" className="aboutus-link">About Us</Link></li> {/* Link to about us page */}
          <li><Link to="/contact" className="contact-link">Contact</Link></li> {/* Link to contact page */}
          <li><Link to="/cart" className="cart-link">Cart</Link></li> {/* Link to cart page */}
          <li><Link to="/profile" className="profile-link">Profile</Link></li> {/* Link to profile page */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
