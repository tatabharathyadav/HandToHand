// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Login = () => {
  const [homeName, setHomeName] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/homes/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ homeName, city, password }),
      });

      if (response.ok) {
        const home = await response.json();
        navigate(`/update-home/${home._id}`);
      } else {
        setErrorMessage('Invalid home name, city, or password. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Error logging in. Please try again.');
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="homeName">Home Name:</label>
          <input
            type="text"
            id="homeName"
            value={homeName}
            onChange={(e) => setHomeName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default Login;