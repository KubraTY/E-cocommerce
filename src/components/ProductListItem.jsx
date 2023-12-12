import React from 'react';

const ProductListItem = ({ product, onDelete }) => {
  return (
    <li key={product.id}>
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        {product.discountPercentage > 0 ? (
          <p>Discounted Price: ${product.price - (product.price * product.discountPercentage) / 100}</p>
        ) : null}
        <button onClick={() => onDelete(product.id)}>Delete</button>
      </div>
    </li>
  );
};

export default ProductListItem;