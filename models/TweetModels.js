const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  tweetId: { type: String, required: true },
  text: { type: String, required: true },
  user: { 
    id: { type: String, required: true },
    name: { type: String, required: true },
    handle: { type: String, required: true }
  },
  media: [{ type: String }], // URLs of images/videos
}, { timestamps: true });

module.exports = mongoose.model('Tweet', tweetSchema);
