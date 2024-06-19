import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Products from './Products';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <h1>Dallas Quantum Devices</h1>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
