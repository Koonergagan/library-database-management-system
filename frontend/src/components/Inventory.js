import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Inventory = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [books, setBooks] = useState([]);  // State to hold list of books

  // Fetch books from the backend
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/books');
        setBooks(response.data);  // Store fetched books in state
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);  // Empty dependency array, so it runs only once after the component mounts

  // Handle adding a new book
  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/books', { title, author });
      console.log('Book added:', response.data);

      // After adding the book, refresh the list of books
      setBooks([...books, response.data]); // Update state with the new book
      setTitle('');  // Reset the title input field
      setAuthor('');  // Reset the author input field
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div>
      <h1>Inventory</h1>

      {/* Form to add a new book */}
      <form onSubmit={handleAddBook}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>

      {/* Display list of books */}
      <h2>Books Available in Inventory</h2>
      <ul>
        {books.length === 0 ? (
          <p>No books available in inventory.</p>
        ) : (
          books.map((book) => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Inventory;
