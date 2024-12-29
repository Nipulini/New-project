import React from 'react';
import '../styles/Footer.css';  // Correct path to Footer.css


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Tredyne. All Rights Reserved.</p>
                <div className="social-media">
                    <a href="#">Facebook</a> | <a href="#">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
