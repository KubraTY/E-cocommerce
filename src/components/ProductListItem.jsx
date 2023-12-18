import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditItemForm from './EditItemForm';
import styles from "../components/styles/productListItem.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";

const ProductListItem = ({ product, onDelete }) => {
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

 // console.log(product)

  return (
    <Link to={`/item-detail/${product.id}`} style={{display:'flex', width:'45%'}} product={product}>
      <li key={product.id} className={styles.productListItem}>
        <h3>{product.title}</h3>
        <div className={styles.content}>
          <div className={styles.pic}><img src={`https://i.dummyjson.com/data/products/${product.id}/thumbnail.jpg`} alt="pic1" />
          </div>
          <div className={styles.context}>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>Price: ${product.price}</p>
            {product.discountPercentage > 0 ? (
              <p className={styles.discounted}>Discounted Price: ${product.price - Math.floor(product.price * product.discountPercentage) / 100}</p>
            ) : null}
            <div className={styles.buttons}><button onClick={() => onDelete(product.id)}><FaRegTrashAlt /></button>
            {editing ? (
              <EditItemForm item={product} onUpdate={handleCancelEdit} />
            ) : (
              <button onClick={handleEdit}><MdOutlineModeEdit /></button>
            )}</div>
            

          </div>

        </div>
      </li>
    </Link>
  );
};

export default ProductListItem;
