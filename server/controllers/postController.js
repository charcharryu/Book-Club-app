const Post = require('../models/postModel');

const postController = {};

postController.getPosts = (req, res, err, next) => {
  console.log('im here in post controller')
  const chapters= [];
  const maxChapter = req.query.chapter;
  for (let i = maxChapter; i > 0; i--) {
    chapters.push(i);
  }
  Post.find({chapter: {$in: chapters}}, (err, matchesFound) => {
    if (err) {
      return next(err);
    }
    console.log(matchesFound);
    // res.locals.posts
    next();
  })
}

module.exports = postController;