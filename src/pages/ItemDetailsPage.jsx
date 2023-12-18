import React from 'react';
import ProductListItem from '../components/ProductListItem';
import productsData from '../assets/data/products.json';
import { useParams } from 'react-router-dom';

const ItemDetailPage = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = productsData.find((p) => p.id === productId);

  console.log(product)

  return (
    <div>
      <h2>Product Details</h2>
      {product ? (
        <ProductListItem product={product} />
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ItemDetailPage;
