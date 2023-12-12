import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/HomePage';

const App = () => {
  return (
    
      <div className="app-container">
        <Navbar />
        <Sidebar />
        <Home />
        <Footer />
      </div>
   
  );
};

export default App;
