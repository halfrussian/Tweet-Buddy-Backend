const express = require('express');
const { fetchAndSaveTweet } = require('../controllers/tweetControllers.js');
const Tweet = require('../models/TweetModels.js');
const router = express.Router(); // Define the router first

// Define a route to fetch and save tweet data

router.get('/all', async (req, res) => {
    console.log('Fetching all tweets...');
    try {
      const tweets = await Tweet.find(); // Fetch all tweets from MongoDB
      res.status(200).json(tweets); // Send the tweets as the response
    } catch (error) {
      console.error('Error fetching tweets:', error);
      res.status(500).json({ error: 'Failed to fetch tweets' });
    }
  });

router.get('/:tweetId', fetchAndSaveTweet);

  module.exports = router; 