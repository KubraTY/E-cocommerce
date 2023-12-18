import React, { useState, useEffect } from 'react';

const EditItemForm = ({ item, handleEditItem }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    discountPercentage: '',
  });

  useEffect(() => {
    // Set the form data when the component mounts
    setFormData({
      title: item.title,
      description: item.description,
      price: String(item.price),
      discountPercentage: String(item.discountPercentage),
    });
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    // You can add validation here before updating the item
    handleEditItem({...formData, images: item.images, id: item.id });
  };

  return (
    <form onSubmit={handleSubmit}>

      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />
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
      <button type="submit">Update Item</button>
    </form>
  );
};

export default EditItemForm;
