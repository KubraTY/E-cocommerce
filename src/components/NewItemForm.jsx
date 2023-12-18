import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../components/styles/form.module.css'

const NewItemForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    discountPercentage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd({ ...formData, id: uuidv4() });

    setFormData({
      title: '',
      description: '',
      price: '',
      discountPercentage: '',
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Discount Percentage:
        <input
          type="number"
          name="discountPercentage"
          value={formData.discountPercentage}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default NewItemForm;
