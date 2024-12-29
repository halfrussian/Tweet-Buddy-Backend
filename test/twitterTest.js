const axios = require('axios');
require('dotenv').config();

// Function to fetch tweet data with media
const fetchTweet = async (tweetId) => {
  const url = `https://api.twitter.com/2/tweets/${tweetId}?tweet.fields=text&expansions=author_id,attachments.media_keys&user.fields=username&media.fields=url`;
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
    },
  };

  try {
    const response = await axios.get(url, config);
    // Extract tweet data
    const tweetData = response.data.data;
    const userData = response.data.includes.users[0];
    const mediaData = response.data.includes.media || [];

    // Log tweet content and media (URLs)
    console.log('Username:', userData.username);
    console.log('Tweet Text:', tweetData.text);

    // If media exists, log the media URLs
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

// Test the function by calling it with a tweet ID
fetchTweet('1873397442538021282'); // Replace with a valid tweet ID

//command to test this out, Seem to work...just need ot learn when My limit is 
/// I think its 15 minutes per call  
// node test/twitterTest.js      

// to run the other stuff
// node server.js

