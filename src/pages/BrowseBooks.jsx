import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BrowseBooks = () => {
  const { category } = useParams();
  const [search, setSearch] = useState('');
  const books = useSelector(state => state.books.books);

  const filteredBooks = books.filter(book =>
    book.category.toLowerCase() === category.toLowerCase() &&
    (book.title.toLowerCase().includes(search.toLowerCase()) ||
     book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="container">
      <h2>Browsing {category} Books</h2>
      <input
        type='text'
        placeholder='Search by title or author'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>
            {book.title} by {book.author} - <Link to={`/book/${book.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseBooks;
