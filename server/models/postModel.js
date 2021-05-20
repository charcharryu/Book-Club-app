const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://char:luxray@book-discussions.yu2gk.mongodb.net/discussionposts?retryWrites=true&w=majority', {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'discussionposts'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

  const Schema = mongoose.Schema;

  const postSchema = new Schema({
    name: String,
    text: String,
    date: { type: Date, default: Date.now },
    chapter: Number
  });