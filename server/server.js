const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const apiRouter = require('./routes/api');

mongoose.connect('mongodb+srv://char:luxray@book-discussions.yu2gk.mongodb.net/discussionposts?retryWrites=true&w=majority', {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'discussionposts'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));


  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.use('/', express.static(path.resolve(__dirname, '../client')));
  app.use('/api', apiRouter);
  
// app.get('/', (req, res) => {
//   // console.log('do you see this');
//   // res.redirect('/login');
//   res.status(200).sendFile(path.join(__dirname, '../index.html'));
// })

// app.get('/login', (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, '../index.html'));
// })

app.get('/feed', (req, res) => {
res.status(200).sendFile(path.join(__dirname, '../index.html'));
})

      
// app.use((req, res) => res.status(404).send('This is an error message, this is not feed.'));

app.listen(3000);