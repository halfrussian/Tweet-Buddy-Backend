const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const tweetRoutes = require('./routes/tweetRoutes.js');

dotenv.config();

const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/api/tweets', tweetRoutes); // Use the tweetRoutes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
