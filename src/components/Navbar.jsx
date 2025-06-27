import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#eee', padding: '10px' }}>
      <Link to='/'>Home</Link> |{' '}
      <Link to='/books/fiction'>Browse Books</Link> |{' '}
      <Link to='/add-book'>Add Book</Link>
    </nav>
  );
};

export default Navbar;
