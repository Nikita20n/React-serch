// src/components/TShirtTable.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Table = ({ initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [form, setForm] = useState({ id: '', name: '', price: '', size: '' });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddOrUpdateProduct = (event) => {
    event.preventDefault();
    if (form.id) {
      setProducts(
        products.map((product) =>
          product.id === form.id ? form : product
        )
      );
    } else {
      setProducts([...products, { ...form, id: uuidv4() }]);
    }
    setForm({ id: '', name: '', price: '', size: '' });
  };

  const handleEditProduct = (product) => {
    setForm(product);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <form onSubmit={handleAddOrUpdateProduct}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="size"
          placeholder="Size"
          value={form.size}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{form.id ? 'Update' : 'Add'} T-Shirt</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Size</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.size}</td>
              <td>
                <button onClick={() => handleEditProduct(product)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
