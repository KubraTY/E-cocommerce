import React from 'react';
import ProductListItem from '../components/ProductListItem';
import productsData from '../assets/data/products.json';
import { useParams } from 'react-router-dom';

const ItemDetailPage = ({products, handleDeleteItem, handleAddItem, handleEditItem, showButtons=true}) => {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);


  return (
    <div>
      {product ? (
        <ProductListItem product={product} handleDeleteItem= {handleDeleteItem} handleAddItem = {handleAddItem} handleEditItem= {handleEditItem}  onDelete={handleDeleteItem}  />
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ItemDetailPage;
