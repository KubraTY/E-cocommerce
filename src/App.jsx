/*

import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import ItemDetailPage from './pages/ItemDetailsPage';

const App = () => {
  return (
    
      <div className="app-container">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/item-detail/:id" element={<ItemDetailPage/>}/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    
        <Footer />
      </div>
   
  );
};

export default App;

*/

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';  // Import the Dashboard component
import Home from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ItemDetailPage from './pages/ItemDetailsPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />  {/* Add a route for the Dashboard */}
        <Route path="/item-detail/:id" element={<ItemDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
