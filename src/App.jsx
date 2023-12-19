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
import JSON from "./assets/data/products.json"
import { useNavigate } from 'react-router-dom';

const App = () => {

  const [products, setProducts] = useState(JSON)
  const navigate = useNavigate();

  const handleAddItem = (newItem) => { 
  const copy= products.map(product=> product)
  copy.push({...newItem})
  console.log(copy)
  setProducts(copy)
  };

  const handleEditItem = (updatedItem) => {
    console.log(updatedItem)
    const updatedProducts = products.map((item) =>
      {
        if(item.id== updatedItem.id) {
          return updatedItem
        }
        else{
          return item
        }
      }
    );
    setProducts(updatedProducts);
  };

  const handleDeleteItem = (id) => {
    
    const updatedProducts = products.filter((item) => item.id !== id);
    setProducts(updatedProducts);
    navigate('/');
  };


  return (
    <div className="app-container">
      <div className="header">
        <Navbar />
        <Sidebar />
      </div>
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home products= {products} handleAddItem= {handleAddItem} handleDeleteItem={handleDeleteItem } handleEditItem={handleEditItem} />} />
          <Route path="/dashboard" element={<Dashboard products= {products} handleAddItem= {handleAddItem } handleEditItem={handleEditItem} />} /> 
          <Route path="/item-detail/:id" element={<ItemDetailPage products= {products} handleAddItem= {handleAddItem} handleDeleteItem={handleDeleteItem } handleEditItem={handleEditItem} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
