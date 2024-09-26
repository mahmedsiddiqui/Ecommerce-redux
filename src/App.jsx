import React from 'react';

import Home from './components/Home';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom';
import Product from '../src/components/Product'
import ContactUs from './ContactUs';
import AboutUs from './About';

const App = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/about' element={<AboutUs/>} />
       

      </Routes>
    </>
  );
}

export default App;
