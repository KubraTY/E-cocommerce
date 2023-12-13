import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import productsData from '../assets/data/products.json';

const Home = () => {
  const [products, setProducts] = useState(productsData);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h2>Home Page!</h2>
      <ProductList products={products} onDelete={handleDelete} />
    </div>
  );
};

export default Home;