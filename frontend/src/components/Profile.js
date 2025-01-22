import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/profilePage.css';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const username = localStorage.getItem('username'); // Replace with actual logic to get logged-in username (e.g., from local storage)

  useEffect(() => {
    if (!username) {
      navigate('/login'); // Redirect to login if no username is found
    } else {
      const fetchUserProfile = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/users/profile?username=${username}`);
          setUserInfo(response.data);
        } catch (err) {
          setError('Failed to fetch user profile data.');
        } finally {
          setLoading(false);
        }
      };

      fetchUserProfile();
    }
  }, [username, navigate]);

  const handleLogout = () => {
    // Clear session data
    localStorage.removeItem('username');
    localStorage.removeItem('loggedIn'); // Optionally clear logged-in state
    navigate('/login'); // Redirect to login page
  };


  

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>Profile</h1>
      </header>

      <nav className="profile-nav">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <div className="profile-content">
        {loading && <p>Loading profile...</p>}
        {error && <p className="error-message">{error}</p>}

        {userInfo && (
          <div className="profile-details">
            <h2>{userInfo.name}</h2>
            <p><strong>Email:</strong> {userInfo.email}</p>
            <p><strong>Username:</strong> {userInfo.username}</p>
            <p><strong>Role:</strong> {userInfo.role}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
