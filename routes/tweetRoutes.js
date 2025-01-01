const express = require('express');
const { fetchAndSaveTweet } = require('../controllers/tweetControllers.js');
const Tweet = require('../models/TweetModels.js');
const router = express.Router(); // Define the router first

// Define a route to fetch and save tweet data
router.get('/:tweetId', fetchAndSaveTweet);

router.get('/testSave', async (req, res) => {
    try {
      const tweet = {
        tweetId: "1234567890",
        username: "TestUser",
        text: "This is a test tweet",
        media: []
      };
  
      const savedTweet = await Tweet.create(tweet);
      res.status(200).json({ message: "Test tweet saved", tweet: savedTweet });
    } catch (error) {
      console.error("Error during test save:", error);
      res.status(500).json({ error: "Test save failed" });
    }
  });
  
  module.exports = router; // Export the router after defining it