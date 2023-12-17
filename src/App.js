import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Route component
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Use Route component instead of Routes */}
          <Route path='/' exact element={<Home />} />
          <Route path='/services' exact element={<Services/>} />
          <Route path='/products' exact element={<Products/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;