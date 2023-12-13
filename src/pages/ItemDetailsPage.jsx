import React from 'react';
import ProductListItem from '../components/ProductListItem';
import productsData from '../assets/data/products.json';
import { useParams } from 'react-router-dom';

const ItemDetailPage = () => {

    
    const { id } = useParams();
  
    const product = productsData.find((p) => p.id === parseInt(id, 10));

  return (
    <div>
      <h2>Product Details</h2>
      <ProductListItem product={product} />
    </div>
  );
};

export default ItemDetailPage;