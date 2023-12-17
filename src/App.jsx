import React, { useState } from 'react';
import "../src/App.css"
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Home from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ItemDetailPage from './pages/ItemDetailsPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-container">
      <div className="header">
        <Navbar />
        <Sidebar />
      </div>
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/item-detail/:id" element={<ItemDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
