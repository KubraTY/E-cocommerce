import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditItemForm from './EditItemForm';
import styles from "../components/styles/productListItem.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";

const ProductListItem = ({ product, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.stopPropagation();
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  const handleItemClick = () => {
    navigate(`/item-detail/${product.id}`);
  };

  const handleDeleteClick = (e) => {
    // Stop the propagation to prevent navigation
    e.stopPropagation();
    onDelete(product.id);
  };

  return (
    <div>
      <li key={product.id} className={styles.productListItem} onClick={handleItemClick}>
        <div className={styles.content}>
          <div className={styles.pic}><img src={`https://i.dummyjson.com/data/products/${product.id}/thumbnail.jpg`} alt="pic1" /></div>
          <div className={styles.context}>
            <h3>{product.title}</h3>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>Price: ${product.price}</p>
            {product.discountPercentage > 0 && (
              <p className={styles.discounted}>Discounted Price: ${product.price - Math.floor(product.price * product.discountPercentage) / 100}</p>
            )}
            <div className={styles.buttons}>
              <button onClick={handleDeleteClick}><FaRegTrashAlt /></button>
              {editing ? (
                <EditItemForm item={product} onUpdate={handleCancelEdit} handleEditItem={onEdit} />
              ) : (
                <button onClick={handleEdit}><MdOutlineModeEdit /></button>
              )}
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default ProductListItem;
