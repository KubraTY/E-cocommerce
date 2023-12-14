/*import React, { useState } from 'react';
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
*/

import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import NewItemForm from '../components/NewItemForm';  // Import the NewItemForm component
import EditItemForm from '../components/EditItemForm';  // Import the EditItemForm component
import productsData from '../assets/data/products.json';

const Home = () => {
  const [products, setProducts] = useState(productsData);
  const [editingItem, setEditingItem] = useState(null);

  const handleAddItem = (newItem) => {
    // You can add validation and other checks here
    setProducts([...products, { id: Date.now(), ...newItem }]);
  };

  const handleEditItem = (updatedItem) => {
    // You can add validation and other checks here
    const updatedProducts = products.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setProducts(updatedProducts);
    setEditingItem(null); // Clear the editing state after updating
  };

  const handleDeleteItem = (id) => {
    // You can add confirmation and other checks here
    const updatedProducts = products.filter((item) => item.id !== id);
    setProducts(updatedProducts);
  };

  const handleStartEditing = (itemId) => {
    const itemToEdit = products.find((item) => item.id === itemId);
    setEditingItem(itemToEdit);
  };

  const handleCancelEditing = () => {
    setEditingItem(null);
  };

  return (
    <div>
      <h2>Home Page!</h2>
      <NewItemForm onAdd={handleAddItem} />
      {editingItem ? (
        <EditItemForm item={editingItem} onUpdate={handleEditItem} />
      ) : (
        <ProductList
          products={products}
          onDelete={handleDeleteItem}
          onEdit={handleStartEditing}
        />
      )}
    </div>
  );
};

export default Home;
