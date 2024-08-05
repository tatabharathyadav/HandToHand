import React, { useState } from 'react';
import Modal from './Modal';
import '../styles.css';

const HomeList = ({ homes }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHome, setSelectedHome] = useState(null);

  const openModal = (home) => {
    setSelectedHome(home);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedHome(null);
  };

  const handleDonateFood = (home) => {
    console.log(`Donating food to ${home.name}`);
    openModal(home);
    // Additional logic as needed for donating food
  };

  return (
    <div>
      <h2>Nearby Old Age and Orphanage Homes</h2>
      <ul>
        {homes.map((home) => (
          <li key={home._id} className={`home-item ${home.needsFood ? 'needs-food' : 'no-food-needed'}`}>
            <h3>{home.name}</h3>
            <p>{home.address}</p>
            <p className="food-status">{home.needsFood ? 'Needs food' : 'No need for food'}</p>
            <button onClick={() => handleDonateFood(home)}>Donate Food</button>
          </li>
        ))}
      </ul>
      {modalOpen && (
        <Modal onClose={closeModal}>
          <h3>{selectedHome.name}</h3>
          <p>{selectedHome.address}</p>
          <p>Phone Number: {selectedHome.phoneNumber}</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default HomeList;
