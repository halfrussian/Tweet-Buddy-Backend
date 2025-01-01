// const mongoose = require('mongoose');

// const tweetSchema = new mongoose.Schema({
//   tweetId: { type: String, required: true }, // Tweet ID
//   username: { type: String, required: true }, // Username of the author
//   text: { type: String, required: true }, // Tweet content
//   media: [{ type: String }], // Array of media URLs (optional)
// });

// const Tweet = mongoose.model('Tweet', tweetSchema);

// module.exports = Tweet;


const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  tweetId: { type: String, required: false, unique: true }, // Ensure `tweetId` is unique
  username: { type: String, required: false },
  text: { type: String, required: false },
  media: { type: [String], required: false },
});

module.exports = mongoose.model('Tweet', tweetSchema);
