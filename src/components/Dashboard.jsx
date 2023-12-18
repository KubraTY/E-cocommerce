import React, { useState } from 'react';
import NewItemForm from '../components/NewItemForm';
import EditItemForm from '../components/EditItemForm';
import ProductList from '../components/ProductList';
import productsData from '../assets/data/products.json';

const Dashboard = ({products, handleAddItem, handleEditItem}) => {
  const [editingItem, setEditingItem] = useState(null);

  

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
      <NewItemForm handleAddItem={handleAddItem} />
      {editingItem ? (
        <EditItemForm item={editingItem} onUpdate={handleEditItem} />
      ) : (
        <ProductList products={products} onDelete={(id) => console.log('Delete', id)} onEdit={handleStartEditing} />
      )}
    </div>
  );
};

export default Dashboard;
