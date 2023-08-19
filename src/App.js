import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

const App = () => {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App