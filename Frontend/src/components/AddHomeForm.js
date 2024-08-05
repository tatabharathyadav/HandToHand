import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';

const AddHomeForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [needsFood, setNeedsFood] = useState(false);
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const checkDuplicate = async (name, city, address) => {
    try {
      const response = await axios.post('http://localhost:5000/api/homes/check-duplicate', { name, city, address });
      return response.data.exists;
    } catch (error) {
      console.error('Error checking duplicate', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage('');
    setErrorMessage('');

    if (await checkDuplicate(name, city, address)) {
      setErrorMessage('Home with this name, city, and address already exists.');
      return;
    }

    const newHome = {
      name,
      address,
      city,
      phoneNumber,
      needsFood,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/api/homes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHome),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Home added:', result);
        setSuccessMessage('Home added successfully!');
        setName('');
        setAddress('');
        setCity('');
        setPhoneNumber('');
        setNeedsFood(false);
        setPassword('');
      } else {
        const errorData = await response.json();
        console.error('Error adding home:', errorData);
        setErrorMessage('Error adding home. Please try again.');
      }
    } catch (error) {
      console.error('Error adding home:', error);
      setErrorMessage('Error adding home. Please try again.');
    }
  };

  return (
    <div className="add-home-form-container">
      <h2>Add a Home</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="add-home-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
        <div className="form-group">
          <label>
            Needs Food:
            <input
              type="checkbox"
              checked={needsFood}
              onChange={(e) => setNeedsFood(e.target.checked)}
            />
          </label>
        </div>
        <button type="submit" className="submit-button">Add Home</button>
      </form>
    </div>
  );
};

export default AddHomeForm;
