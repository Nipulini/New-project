import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './components/Shop'; 
import Home from './components/Home'; 
import Tops from './components/Tops'; // Import Tops component
//import Dresses from './components/Dresses'; // Import Dresses component
//import Skirts from './components/Skirts'; // Import Skirts component
//import Trousers from './components/Trousers'; // Import Trousers component
//import './styles/category.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/tops" element={<Tops />} /> {/* Route for Tops */}
          
          <Route path="/shop" element={<Shop />} /> {/* Generic Shop route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
