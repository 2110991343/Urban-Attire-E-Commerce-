import React from 'react';
import './App.css';
import AboutUs from './aboutus';
import MensProduct from './MensProduct';
import WomensProduct from './WomensProduct';
import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/mens-products" />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/mens-products" element={<MensProduct />} />
        <Route path="/shop-women" element={<WomensProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
