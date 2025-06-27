import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [form, setForm] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: ''
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.title || !form.author || !form.category || !form.description || !form.rating) {
      setError('All fields are required');
      return;
    }
    dispatch(addBook(form));
    navigate(`/books/${form.category.toLowerCase()}`);
  };

  return (
    <div className="container">
      <h2>Add New Book</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name='title' placeholder='Title' onChange={handleChange} /><br />
        <input name='author' placeholder='Author' onChange={handleChange} /><br />
        <input name='category' placeholder='Category' onChange={handleChange} /><br />
        <input name='description' placeholder='Description' onChange={handleChange} /><br />
        <input name='rating' placeholder='Rating' onChange={handleChange} /><br />
        <button type='submit'>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
