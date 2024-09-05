 //server.js

 const express = require('express');
 const cors = require('cors');
 const mongoose = require('mongoose');
 const homesRouter = require('./routes/api/homes');
 require('dotenv').config();
 
 const app = express();
 app.use(cors());
 app.use(express.json());
 
 // MongoDB connection setup
 const mongoURI = process.env.MONGODB_URI;
 mongoose.connect(mongoURI
  , { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('MongoDB connected'))
   .catch(err => console.error('MongoDB connection error:', err));
 
 // Routes
 app.use('/api/homes', homesRouter);
 
 const port = process.env.PORT || 5000;
 app.listen(port, () => console.log(`Server running on port ${port}`));