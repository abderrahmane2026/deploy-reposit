import React, { useState } from 'react';
import './AddProduct.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [quantity, setQuantity] = useState(''); // New state for quantity

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', title);
    formData.append('price', parseFloat(price));
    formData.append('description', description);
    formData.append('image', image);
    formData.append('category', category);
    formData.append('company', company);
    formData.append('quantity', parseInt(quantity)); // Append quantity to formData

    fetch('/api/products', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(json => {
        <Popup>
          add product
        </Popup>
        console.log('Success:', json);
      })
      .catch(err => console.error('Error:', err));
    <Popup>
      don't add product
    </Popup>
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="Screen">Screen</option>
            <option value="Phone">Phone</option>
            <option value="Accessories">Accessories</option>
            <option value="Computer">Computer</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="company">Company</label>
          <select
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          >
            <option value="">Select a company</option>
            <option value="Hp">HP</option>
            <option value="Dell">Dell</option>
            <option value="Samsung">Samsung</option>
            <option value="Iphone">IPhone</option>
            <option value="Xiaomi">Xiaomi</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label> {/* New quantity field */}
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>

        <div className="addproduct-button">
          <button type="submit" className="submit-button">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
