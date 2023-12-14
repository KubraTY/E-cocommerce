/*import React from 'react';
import {Link} from "react-router-dom"

const ProductListItem = ({ product, onDelete }) => {
  return (
    <li key={product.id}>
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        {product.discountPercentage > 0 ? (
          <p>Discounted Price: ${product.price - Math.floor(product.price * product.discountPercentage) / 100}</p>
        ) : null}
        <Link to={`/item-detail/${product.id}`}>View Details</Link>
        <button onClick={() => onDelete(product.id)}>Delete</button>
      </div>
    </li>
  );
};

export default ProductListItem;*/

// 2 version

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditItemForm from './EditItemForm'; // Import the EditItemForm component

const ProductListItem = ({ product, onDelete }) => {
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  return (
    <li key={product.id}>
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        {product.discountPercentage > 0 ? (
          <p>Discounted Price: ${product.price - Math.floor(product.price * product.discountPercentage) / 100}</p>
        ) : null}
        <Link to={`/item-detail/${product.id}`}>View Details</Link>
        <button onClick={() => onDelete(product.id)}>Delete</button>
        {editing ? (
          <EditItemForm item={product} onUpdate={handleCancelEdit} />
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </div>
    </li>
  );
};

export default ProductListItem;
