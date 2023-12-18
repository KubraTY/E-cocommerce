import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import NewItemForm from '../components/NewItemForm';  
import EditItemForm from '../components/EditItemForm';
import productsData from '../assets/data/products.json';

  const Home = ({products, handleAddItem, handleEditItem, handleDeleteItem}) => {
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
     <NewItemForm handleAddItem={handleAddItem} />
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
