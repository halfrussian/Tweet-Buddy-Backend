const express = require('express');
const { saveTweet } = require('../controllers/tweetControllers.js');

const router = express.Router();

// Route to save tweet data
router.post('/saveTweet', saveTweet);

module.exports = router;