import React from 'react';
import ProductListItem from '../components/ProductListItem';

const ProductList = ({ products, onDelete }) => {
  return (
    <ul>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ProductList;