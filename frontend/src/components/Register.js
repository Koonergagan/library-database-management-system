import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/registerPage.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'USER',  // Default role
  });

  const [message, setMessage] = useState('');
const navigate = useNavigate();
  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/users/register', formData);

      if (response.status === 200) {
        setMessage('Registration Successful');
        setTimeout(() => {
          navigate('/dashboard'); // Redirect to login page after registration
        }, 2000);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setMessage('Registration Failed');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
        <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
        <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
        <label htmlFor="password">Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
        <label htmlFor="role">Role</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        <div>
          <button type="submit" className="btn" >Register</button>
        </div>
      </form>

      {message && <p>{message}</p>}
    </div>
    </div>
  );
};

export default Register;
