const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const tweetRoutes = require('./routes/tweetRoutes.js');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/tweets', tweetRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
