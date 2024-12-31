const axios = require('axios');
const Tweet = require('../models/TweetModels.js'); // Import the Tweet schema

// Fetch and save tweet data
const fetchAndSaveTweet = async (req, res) => {
  const { tweetId } = req.params; // Extract tweet ID from the route parameter

  const url = `https://api.twitter.com/2/tweets/${tweetId}?tweet.fields=text&expansions=author_id,attachments.media_keys&media.fields=url&user.fields=username`;
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
    },
  };


  try {
    // Fetch tweet data from Twitter API
    const response = await axios.get(url, config);
    const tweetData = response.data.data;
    const userData = response.data.includes.users[0];
    const mediaData = response.data.includes.media || [];

    // Create and save tweet in MongoDB
    const tweet = new Tweet({
      tweetId: tweetData.id,
      username: userData.username,
      text: tweetData.text,
      media: mediaData.map((media) => media.url), // Extract media URLs
    });

    await tweet.save();

    res.status(200).json({ message: 'Tweet saved successfully', tweet });
  } catch (error) {
    console.error('Error fetching or saving tweet:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch or save tweet' });
  }
};

module.exports = { fetchAndSaveTweet };
