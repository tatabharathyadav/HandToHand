//  //server.js

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const homesRouter = require('./routes/api/homes');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB connection setup
// const mongoURI = 'mongodb://localhost:27017/carehaven'; 
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Routes
// app.use('/api/homes', homesRouter);

// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server running on port ${port}`));

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
const homesRouter = require('./routes/api/homes');
app.use('/api/homes', homesRouter);

// MongoDB connection
const mongoUri = process.env.MONGODB_URI;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log('MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
