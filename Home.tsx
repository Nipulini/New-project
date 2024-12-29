import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/category.css';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Tredyne Fashion Store</h1>
      <div className="category-container">
        <div className="category-box">
          <Link to="/shop/tops">
            <img src="/images/tops.jpeg" alt="Tops" />
            <h3>Tops</h3>
          </Link>
        </div>
        <div className="category-box">
          <Link to="/shop/dresses">
            <img src="/images/dresses.avif" alt="Dresses" />
            <h3>Dresses</h3>
          </Link>
        </div>
        <div className="category-box">
          <Link to="/shop/skirts">
            <img src="/images/skirts.jpeg" alt="Skirts" />
            <h3>Skirts</h3>
          </Link>
        </div>
        <div className="category-box">
          <Link to="/shop/trousers">
            <img src="/images/trousers.jpeg" alt="Trousers" />
            <h3>Trousers</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
