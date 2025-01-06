const axios = require('axios');
require('dotenv').config();

const fetchTweet = async (tweetId) => {
  const url = `https://api.twitter.com/2/tweets/${tweetId}?tweet.fields=text&expansions=author_id,attachments.media_keys&user.fields=username&media.fields=url`;
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
    },
  };

  try {
    const response = await axios.get(url, config);
    const tweetData = response.data.data;
    const userData = response.data.includes.users[0];
    const mediaData = response.data.includes.media || [];

    if (mediaData.length > 0) {
      mediaData.forEach(media => {
        console.log('Media URL:', media.url);
      });
    } else {
      console.log('No media attached to this tweet.');
    }
  } catch (error) {
    console.error('Error fetching tweet:', error.response?.data || error.message);
  }
};


fetchTweet('1873397442538021282'); 

