import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';

const Home = () => {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];
  const books = useSelector(state => state.books.books);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Welcome to the Online Library 📚</h1>

      <h2>Categories:</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat}><Link to={`/books/${cat.toLowerCase()}`}>{cat}</Link></li>
        ))}
      </ul>

      <h2>Popular Books:</h2>
      <div className="book-grid">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
  ))}
</div>
 
    </div>
  );
};

export default Home;

