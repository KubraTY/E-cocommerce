import React from 'react';
import ProductListItem from '../components/ProductListItem';

const ProductList = ({ products, onDelete }) => {
  return (
    <ul  style={{display:'flex', flexWrap:'wrap', gap:20}}>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} onDelete={onDelete}/>
      ))}
    </ul>
  );
};

export default ProductList;