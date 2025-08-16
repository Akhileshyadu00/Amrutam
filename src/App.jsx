import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import Home from './pages/Home';
import Footer from './pages/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Search />
      <main className="p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
