import React, { useState } from 'react';
import axios from 'axios';
import '../styles/loginPage.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

if (!username.trim() || !password.trim()) {
  setErrorMessage('Username and password are required');
  return;
}
    const user = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:8080/users/login', user);
      if (response.status === 200) {
        localStorage.setItem('username', username);
        localStorage.setItem('loggedIn', true);
        // Handle success (e.g., redirect or store user data)
        console.log('Login Successful');
        navigate('/profile');
      }
    } catch (error) {
      if (error.response) {
        // Handle backend errors (invalid credentials)
        setErrorMessage(error.response.data || 'Invalid credentials');
      } else {
        setErrorMessage('Network Error');
      } 
    }finally {
        setLoading(false);
      
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
      <div className="input-group">
      <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
       required />
       </div>
       <div className="input-group">
            <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        required/>
        </div>
        <button type="submit" className='btn'>Login</button>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
    </div>
    
  );
};

export default Login;
