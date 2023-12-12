import React, { useState } from 'react';
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
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              {product.discountPercentage > 0 ? (
                <p>Discounted Price: ${product.price - (product.price * product.discountPercentage) / 100}</p>
              ) : null}
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
