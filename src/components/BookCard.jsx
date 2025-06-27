import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      margin: '10px',
      borderRadius: '8px',
      width: '200px',
      textAlign: 'center',
      backgroundColor: '#fff',
      boxShadow: '0 0 5px rgba(0,0,0,0.1)'
    }}>
      <img src={book.image} alt={book.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
      <h3 style={{ fontSize: '16px' }}>{book.title}</h3>
      <p>{book.author}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
};

export default BookCard;
