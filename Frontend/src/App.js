import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomRouter from './CustomRouter'; 
import './index.css'; 

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
