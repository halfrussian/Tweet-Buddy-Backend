const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  tweetId: { type: String, required: true }, // Tweet ID
  username: { type: String, required: true }, // Username of the author
  text: { type: String, required: true }, // Tweet content
  media: [{ type: String }], // Array of media URLs (optional)
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;

