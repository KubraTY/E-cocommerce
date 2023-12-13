import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import ItemDetailPage from './components/ItemDetailsPage';

const App = () => {
  return (
    
      <div className="app-container">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/item-detail/:id" element={<ItemDetailPage/>}/>
        </Routes>
    
        <Footer />
      </div>
   
  );
};

export default App;
