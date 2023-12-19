import React from 'react';
import ProductListItem from '../components/ProductListItem';

const ProductList = ({ products, onDelete , onEdit}) => {
  return (
    <ul  className='productStyle'>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} onDelete={onDelete} onEdit={onEdit}showButtons={false} />
      ))}
    </ul>
  );
};

export default ProductList;