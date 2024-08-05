// src/components/UpdateHomeStatus.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles.css';

const UpdateHomeStatus = () => {
  const { id } = useParams();
  const [home, setHome] = useState(null);
  const [needsFood, setNeedsFood] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/homes/${id}`);
        if (response.ok) {
          const home = await response.json();
          setHome(home);
          setNeedsFood(home.needsFood);
        } else {
          setErrorMessage('Failed to fetch home details.');
        }
      } catch (error) {
        console.error('Error fetching home:', error);
        setErrorMessage('Error fetching home details.');
      }
    };

    fetchHome();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/homes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ needsFood }),
      });

      if (response.ok) {
        setSuccessMessage('Home status updated successfully!');
      } else {
        setErrorMessage('Error updating home status. Please try again.');
      }
    } catch (error) {
      console.error('Error updating home status:', error);
      setErrorMessage('Error updating home status. Please try again.');
    }
  };

  if (!home) return <p>Loading...</p>;

  return (
    <div className="update-home-status-container">
      <h2>Update Home Status</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleUpdate} className="update-home-status-form">
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
        <button type="submit" className="submit-button">Update Status</button>
      </form>
    </div>
  );
};

export default UpdateHomeStatus;
