const axios = require('axios');

const testSaveTweet = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/tweets/saveTweet', {
      tweetId: '1873397442538021282', // Replace with valid ID
    });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
};

testSaveTweet();
