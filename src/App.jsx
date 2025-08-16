import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Nav from './components/Nav';
import Template from './components/Template';


import ProductDetails from './components/ProductDetails';
import IngredientDetails from './components/IngredientDetails';


function App() {
  return (
    <Router>
      <Header />
      <Search />
      <Nav />
      <main className="p-0">
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/product/:id" element={<ProductDetails />} />
         <Route path="/ingredient/:name" element={<IngredientDetails />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      <Template />
      <Footer />
    </Router>
  );
}

export default App;
