
const mongoose = require('mongoose');
const tweetSchema = new mongoose.Schema({
  tweetId: { type: String, required: false, unique: true }, // Ensure `tweetId` is unique
  username: { type: String, required: false },
  text: { type: String, required: false },
  media: { type: [String], required: false },
});

module.exports = mongoose.model('Tweet', tweetSchema);
