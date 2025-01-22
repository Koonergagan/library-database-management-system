import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import axios from 'axios';
import '../styles/dashboardPage.css';

const LibraryDashboard = () => {
  const [fetchedBooks, setFetchedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Function to categorize fetched books based on title
  const categorizeBook = (title) => {
    if (title.toLowerCase().includes('history')) return 'History';
    if (title.toLowerCase().includes('science')) return 'Science';
    if (title.toLowerCase().includes('fiction')) return 'Fiction';
    if (title.toLowerCase().includes('math')) return 'Mathematics';
    return 'General';
  };

  // Fetch books from backend API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/books');
        const booksWithCategories = response.data.map(book => ({
          ...book,
          category: categorizeBook(book.title),
        }));
        setFetchedBooks(booksWithCategories);
      } catch (err) {
        setError('Failed to fetch books. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Library Dashboard</h1>
      </header>

      <nav className="dashboard-nav">
        <Link to="/">Logout</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/inventory">Inventory</Link>
      </nav>

      <div className="dashboard-content">
        <section className="book-list">
          <h2>Available Books</h2>

          {loading && <p>Loading books...</p>}
          {error && <p className="error-message">{error}</p>}

          <table className="books-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {fetchedBooks.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.category}</td>
                  <td>{book.available ? 'Available' : 'Checked Out'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default LibraryDashboard;
