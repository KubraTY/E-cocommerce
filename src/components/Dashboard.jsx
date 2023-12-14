import React, { useState } from 'react';
import NewItemForm from '../components/NewItemForm';
import EditItemForm from '../components/EditItemForm';
import ProductList from '../components/ProductList';
import productsData from '../assets/data/products.json';

const Dashboard = () => {
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

  const handleStartEditing = (itemId) => {
    const itemToEdit = products.find((item) => item.id === itemId);
    setEditingItem(itemToEdit);
  };

  const handleCancelEditing = () => {
    setEditingItem(null);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <NewItemForm onAdd={handleAddItem} />
      {editingItem ? (
        <EditItemForm item={editingItem} onUpdate={handleEditItem} />
      ) : (
        <ProductList products={products} onDelete={(id) => console.log('Delete', id)} onEdit={handleStartEditing} />
      )}
    </div>
  );
};

export default Dashboard;
