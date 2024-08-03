import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomRouter from './CustomRouter'; // Assuming CustomRouter is defined in CustomRouter.js
import './index.css'; // Import global CSS styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <CustomRouter />
      </div>
    </Router>
  );
};

export default App;
