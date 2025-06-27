import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 1,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      category: 'fiction',
      description: 'A philosophical book about a boy’s journey.',
      rating: 4.5,
      image: 'https://covers.openlibrary.org/b/id/8277896-L.jpg'
    },
    {
      id: 2,
      title: 'Atomic Habits',
      author: 'James Clear',
      category: 'non-fiction',
      description: 'Guide to building good habits.',
      rating: 4.8,
      image: 'https://covers.openlibrary.org/b/id/10522729-L.jpg'
    },
    {
      id: 3,
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'sci-fi',
      description: 'Sci-fi classic about politics and power.',
      rating: 4.6,
      image: 'https://covers.openlibrary.org/b/id/240727-L.jpg'
    }
  ]
};


const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({ id: Date.now(), ...action.payload });
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
