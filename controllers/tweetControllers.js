const axios = require('axios');
const Tweet = require('../models/TweetModels.js');

const saveTweet = async (req, res) => {
  const { tweetId } = req.body;

  try {
    // Make API call to Twitter to fetch tweet details
    const twitterResponse = await axios.get(`https://api.twitter.com/2/tweets/${tweetId}`, {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    });

    const tweetData = twitterResponse.data.data;
    const userData = twitterResponse.data.includes.users[0];

    // Save tweet data to MongoDB
    const tweet = new Tweet({
      tweetId: tweetData.id,
      text: tweetData.text,
      user: {
        id: userData.id,
        name: userData.name,
        handle: userData.username,
      },
      media: tweetData.attachments ? tweetData.attachments.media_keys : [],
    });

    await tweet.save();

    res.status(201).json({ message: 'Tweet saved successfully!', tweet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save tweet', error: error.message });
  }
};

module.exports = { saveTweet };
