const express = require('express');

const postController = require('../controllers/postController');

const router = express.Router();

router.get('/feed',
  postController.getPosts,
  (req, res) => res.status(200).json(res.locals.posts)
);

module.exports = router;