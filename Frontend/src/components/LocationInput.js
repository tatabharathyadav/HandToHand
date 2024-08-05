import React, { useState } from 'react';
import HomeList from './HomeList';
import '../styles.css';

const LocationInput = () => {
  const [city, setCity] = useState('');
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`http://localhost:5000/api/homes/city/${encodeURIComponent(city)}`);
      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error || 'Failed to fetch homes');
      }
      const data = await response.json();
      setHomes(data);
    } catch (error) {
      console.error('Error fetching homes:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="location-input-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter location"
          className="search-bar"
        />
        <button type="submit" className="search-button">Find Homes</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {homes.length > 0 && <HomeList homes={homes} />}
    </div>
  );
};

export default LocationInput;