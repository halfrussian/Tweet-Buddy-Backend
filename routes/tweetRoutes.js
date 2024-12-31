const express = require('express');
const { fetchAndSaveTweet } = require('../controllers/tweetControllers.js');

const router = express.Router(); // Define the router first

// Define a route to fetch and save tweet data
router.get('/:tweetId', fetchAndSaveTweet);

module.exports = router; // Export the router after defining it
